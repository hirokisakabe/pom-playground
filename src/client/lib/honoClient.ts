import { hc } from "hono/client";

import type { AppType } from "@/server/hono";

export const honoClient = hc<AppType>("");
