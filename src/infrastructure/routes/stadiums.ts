import { Hono } from "hono";
import { GetStadiumMatchsHandler } from "@infrastructure/handlers/stadiums/GetStadiumMatchsHandler";
import { GetStadiumsHandler } from "@infrastructure/handlers/stadiums/GetStadiumsHandler";
import { GetStadiumByNameHandler } from "@infrastructure/handlers/stadiums/GetStadiumByNameHandler";


const stadiumsRouter = new Hono();

stadiumsRouter.get("/", (c) => new GetStadiumsHandler().handle(c));
stadiumsRouter.get("/:name", (c) => new GetStadiumByNameHandler().handle(c));
stadiumsRouter.get("/:name/matchs", (c) => new GetStadiumMatchsHandler().handle(c));


export default stadiumsRouter;