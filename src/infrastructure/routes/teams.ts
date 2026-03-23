import { Hono } from "hono";
import { GetTeamsHandler } from "@infrastructure/handlers/teams/GetTeamsHandler";
import { GetTeamByFifaCodeHandler } from "@infrastructure/handlers/teams/GetTeamByFifaCodeHandler";
import { GetTeamMatchsByFifaCodeHandler } from "@infrastructure/handlers/teams/GetTeamMatchsByFifaCodeHandler";
import { GetTeamMatchsByStageHandler } from "@infrastructure/handlers/teams/GetTeamMatchsByStageHandler";

const teamsRouter = new Hono();

teamsRouter.get("/teams", (c) => new GetTeamsHandler().handle(c));
teamsRouter.get("/teams/{fifaCode}", (c) => new GetTeamByFifaCodeHandler().handle(c));
teamsRouter.get("/teams/{fifaCode}/matchs", (c) => new GetTeamMatchsByFifaCodeHandler().handle(c));
teamsRouter.get("/teams/{fifaCode}/matchs/{stage}", (c) => new GetTeamMatchsByStageHandler().handle(c));

export default teamsRouter;