import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";
import { teams } from "@infrastructure/mock/teams";
import { MatchStage } from "@domain/entities/MatchStage";
import { HTTPException } from "hono/http-exception";

export class GetTeamMatchsByStageHandler{
    async handle (c : Context){
        const fifaCode = c.req.param("fifaCode");
        const stage = c.req.param("stage");

        // dans le cas où le code FIFA est invalide
        if (!fifaCode || fifaCode.length !== 3) {
            throw new HTTPException(400, { 
                message: "Le code FIFA est invalide." 
            });
        }

        // dans le cas où le stage est invalide 
        const validStages = ["group", "round_of_32", "round_of_16", "quarter_finals", "semi_finals", "third_place", "final"];
        if (!stage || !validStages.includes(stage.toLowerCase())) {
            throw new HTTPException(400, {
                message : "La valeur de stage ne fait pas partie des valeurs autorisées."
            });
        }

        // dans le cas où l'équipe n'existe pas 
        const teamExists = teams.find(t => t.code.value.toLowerCase() === fifaCode.toLowerCase());
        if (!teamExists){
            throw new HTTPException(404, {
                message : "L'équipe n'existe pas."
            });
        }

        // dans le cas où c'est OK
        
        const matchsFiltres = matchs.filter(m => {
            const isTeamInMatch = m.homeTeam.code.value.toLowerCase() === fifaCode.toLowerCase() || 
                                 m.awayTeam.code.value.toLowerCase() === fifaCode.toLowerCase();
            const isCorrectStage = String(m.stage).toLowerCase() === stage.toLowerCase();
            return isTeamInMatch && isCorrectStage;
        });
        
        return c.json({
            success : true,
            data : matchsFiltres
        }, 200)



    }
}