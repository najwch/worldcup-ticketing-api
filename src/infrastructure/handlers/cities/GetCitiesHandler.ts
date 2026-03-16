import type { Context } from "hono";
import { cities } from "@infrastructure/mock/cities";

export class GetCitiesHandler {
    async handle(c: Context){
        return c.json({success : true, data: cities}, 200);
    }
}