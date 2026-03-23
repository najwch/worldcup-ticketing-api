import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";

export class GetMatchByStageHandler {
    async handle(c : Context){
        const stage = c.req.query("stage");

        const validStages = ["group", "round_of_32", "round_of_16", "quarter_finals", "semi_finals", "third_place", "final"];

        if (!stage || !validStages.includes(stage.toLowerCase())) {
            return c.json({
                success: false,
                error: "Le stage est incorrect."
            }, 400);
        }

        const matchsFiltres = matchs.filter(m => 
            String(m.stage).toLowerCase() === stage.toLowerCase()
        );

        return c.json({
            success: true,
            message: `Matchs pour l'étape : ${stage}`,
            data: matchsFiltres
        }, 200);
    }
}
        