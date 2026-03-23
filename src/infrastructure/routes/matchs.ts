import { Hono } from "hono";
import { GetMatchByIdHandler } from "@infrastructure/handlers/matchs/GetMatchByIdHandler";
import { GetMatchsHandler } from "@infrastructure/handlers/matchs/GetMatchsHandler";
import { GetMatchByStageHandler } from "@infrastructure/handlers/matchs/GetMatchByStageHandler";

const matchsRouter = new Hono();

matchsRouter.get("/", (c) => new GetMatchsHandler().handle(c));
matchsRouter.get("/:id", (c) => new GetMatchByIdHandler().handle(c));
matchsRouter.get("/teams/{fifaCode}/matchs", (c) => new GetMatchByStageHandler().handle(c));

export default matchsRouter;