import { Hono } from "hono";
import { GetTeamsHandler } from "@infrastructure/handlers/teams/GetTeamsHandler";

const teamsRouter = new Hono();

teamsRouter.get("/teams", (c) => new GetTeamsHandler().handle(c));

export default teamsRouter;