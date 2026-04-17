import { Hono } from "hono";
import { GetCountriesHandler } from "@infrastructure/handlers/countries/GetCountriesHandler";

const countriesRouter = new Hono();

countriesRouter.get("/", (c) => new GetCountriesHandler().handle(c));

export default countriesRouter;