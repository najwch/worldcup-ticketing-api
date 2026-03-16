import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";

export class GetMatchsHandler {
    async handle(c : Context){
        return c.json({
            success : true,
            message : "All matchs",
            data : matchs
        }, 200);
    }
}