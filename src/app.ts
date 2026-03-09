import { Hono } from "hono";

console.log("Hello via Bun!");

export const app = new Hono();

app.get("/", (c) => {
  return c.json(
    {
        success : true,
        message : "World Cup Ticketing API",
    },
  );
});