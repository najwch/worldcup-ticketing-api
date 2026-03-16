import { Hono } from "hono";
import { GetStadiumsHandler } from "@infrastructure/handlers/stadiums/GetStadiumsHandler";

const stadiumsRouter = new Hono();

stadiumsRouter.get("/stadiums", (c) => new GetStadiumsHandler().handle(c));

export default stadiumsRouter;