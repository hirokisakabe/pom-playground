import { Hono } from "hono";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

export { app };

export type AppType = typeof route;
