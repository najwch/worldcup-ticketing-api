import { Hono } from "hono";
import { GetStadiumMatchsHandler } from "@infrastructure/handlers/stadiums/GetStadiumMatchsHandler";
import { GetStadiumsHandler } from "@infrastructure/handlers/stadiums/GetStadiumsHandler";


const stadiumsRouter = new Hono();

stadiumsRouter.get("/stadiums/{name}/matchs", (c) => new GetStadiumMatchsHandler().handle(c));
stadiumsRouter.get("/stadiums", (c) => new GetStadiumsHandler().handle(c));


export default stadiumsRouter;