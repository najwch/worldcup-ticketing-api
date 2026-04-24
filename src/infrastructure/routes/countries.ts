import { Hono } from "hono";
import { GetCountriesHandler } from "@infrastructure/handlers/countries/GetCountriesHandler";
import { GetCountryCitiesHandler } from "@infrastructure/handlers/countries/GetCountryCitiesHandler";

const countriesRouter = new Hono();

countriesRouter.get("/", (c) => new GetCountriesHandler().handle(c));
countriesRouter.get("/:code/cities", (c) => new GetCountryCitiesHandler().handle(c));

export default countriesRouter;