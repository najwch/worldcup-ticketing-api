import { Hono } from "hono";
import { GetMatchByIdHandler } from "@infrastructure/handlers/matchs/GetMatchByIdHandler";
import { GetMatchsHandler } from "@infrastructure/handlers/matchs/GetMatchsHandler";
import { GetMatchByStageHandler } from "@infrastructure/handlers/matchs/GetMatchByStageHandler";
import { GetMatchsByStatusHandler } from "@infrastructure/handlers/matchs/GetMatchsByStatusHandler";

const matchsRouter = new Hono();

matchsRouter.get("/", (c) => new GetMatchsHandler().handle(c));
matchsRouter.get("/matchs/stages/{stage}", (c) => new GetMatchByStageHandler().handle(c));
matchsRouter.get("/matchs/status/{status}", (c) => new GetMatchsByStatusHandler().handle(c));
matchsRouter.get("/matchs/{id}", (c) => new GetMatchByIdHandler().handle(c));


export default matchsRouter;