import type{ Context } from "hono";
import { teams } from "@infrastructure/mock/teams";
import { matchs } from "@infrastructure/mock/matchs";
import { HTTPException } from "hono/http-exception";

export class GetTeamMatchsByFifaCodeHandler{
    async handle(c : Context){
        
        const fifaCode = c.req.param("fifaCode");

        // dans le cas où le code FIFA est invalide
        if (!fifaCode || fifaCode.length !== 3) {
            throw new HTTPException(400, { 
                message: "Le code FIFA est invalide." 
            });
        }

        const search = fifaCode.toLowerCase();

        const matchsFiltres = matchs.filter(m => 
            m.homeTeam.code.value.toLowerCase() === search || 
            m.awayTeam.code.value.toLowerCase() === search
        );

        return c.json({
            success: true,
            data: matchsFiltres // renvoie la liste des matchs filtrés 
        }, 200);
    }
}