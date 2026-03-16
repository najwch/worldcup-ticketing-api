import { Hono } from "hono";
import { GetCitiesHandler } from "@infrastructure/handlers/cities/GetCitiesHandler";

const citiesRouter = new Hono();

citiesRouter.get("/cities", (c) => new GetCitiesHandler().handle(c));

export default citiesRouter;