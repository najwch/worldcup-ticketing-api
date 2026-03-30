import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";
import { HTTPException } from "hono/http-exception";

export class GetMatchByStageHandler {
    async handle(c : Context){
        const stage = c.req.query("stage");

        // dans le cas où la valeur du stage ne fait pas partie des valeurs autorisées 
        const validStages = ["group", "round_of_32", "round_of_16", "quarter_finals", "semi_finals", "third_place", "final"];
        if (!stage || !validStages.includes(stage.toLowerCase())) {
            throw new HTTPException(400, {
                message : "La valeur de stage ne fait pas partie des valeurs autorisées."
            });
        }

        const matchsFiltres = matchs.filter(m => 
            String(m.stage).toLowerCase() === stage.toLowerCase()
        );

        return c.json({
            success: true,
            message: `Matchs pour l'étape : ${stage}`,
            data: matchsFiltres // renvoie la liste des matchs filtrés
        }, 200);
    }
}
        