import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";

export class GetMatchByIdHandler {
    async handle(c : Context){

        const idParam = c.req.param("id");
        const id = Number(idParam);

        const match = matchs.find((m) => m.id === id);

        if (!match) {
            return c.json({
                success: false,
                error: `Match ${idParam} does not exist`,
            }, 404);
        }

        return c.json({
            success : true,
            message : `Match ${idParam}`,
            data : match
        }, 200);
    }
}