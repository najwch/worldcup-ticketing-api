import { Hono } from "hono";
import { GetMatchByIdHandler } from "@infrastructure/handlers/GetMatchByIdHandler";
import { GetMatchsHandler } from "@infrastructure/handlers/GetMatchsHandler";

const matchsRouter = new Hono();

matchsRouter.get("/", (c) => new GetMatchsHandler().handle(c));
matchsRouter.get("/:id", (c) => new GetMatchByIdHandler().handle(c));

export default matchsRouter;