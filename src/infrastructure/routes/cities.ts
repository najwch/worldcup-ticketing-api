import { Hono } from "hono";
import { GetCitiesHandler } from "@infrastructure/handlers/cities/GetCitiesHandler";
import { GetCityMatchsHandler } from "@infrastructure/handlers/cities/GetCityMatchsHandler";

const citiesRouter = new Hono();

citiesRouter.get("/", (c) => new GetCitiesHandler().handle(c));
citiesRouter.get("/:name/matchs", (c) => new GetCityMatchsHandler().handle(c));

export default citiesRouter;