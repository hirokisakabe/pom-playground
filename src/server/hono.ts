import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { convertXmlToPreview } from "./convertXmlToPreview";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app
  .get("/health", (c) => {
    return c.json({ status: "ok" });
  })
  .post(
    "/preview",
    zValidator(
      "json",
      z.object({
        xml: z.string(),
      }),
    ),
    async (c) => {
      const { xml } = c.req.valid("json");

      try {
        const result = await convertXmlToPreview(xml);
        return c.json(result);
      } catch (e) {
        const message =
          e instanceof Error ? e.message : "プレビューの生成に失敗しました";
        return c.json({ error: message }, 400);
      }
    },
  );

export { app };

export type AppType = typeof route;
