import type { Context } from "hono";
import { teams } from "@infrastructure/mock/teams";

export class GetTeamsHandler {
    async handle(c: Context){
        return c.json({success : true, data: teams}, 200);
    }
}