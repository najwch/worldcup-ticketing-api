import type { Context } from "hono";
import { countries } from "@infrastructure/mock/countries";

export class GetCountriesHandler {
    async handle(c: Context){
        return c.json({success : true, data: countries}, 200);
    }
}