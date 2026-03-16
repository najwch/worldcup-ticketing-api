import type { Context } from "hono";
import { stadiums } from "@infrastructure/mock/stadiums";

export class GetStadiumsHandler {
    async handle(c: Context){
        return c.json({success : true, data: stadiums}, 200);
    }
}