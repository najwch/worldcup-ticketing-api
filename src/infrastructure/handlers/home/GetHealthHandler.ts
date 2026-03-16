import type { Context } from "hono";

export class GetHealthHandler {
  async handle(c: Context) {
    return c.json({
      success: true,
      message: "API is healthy and running"
    }, 200);
  }
}