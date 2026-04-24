import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";
import { HTTPException } from "hono/http-exception";

export class GetMatchsHandler {
    async handle(c : Context){
        
        const teamCode = c.req.query("team[code]");
    
        const date = c.req.param("date");

        let matchsFiltres = [...matchs];

        // dans le cas où le code FIFA est incorrect => ERREUR
        if (teamCode) {
            if (teamCode.length !== 3) {
                return c.json({
                    success: false,
                    error: "Le code FIFA est incorrect, il doit contenir 3 caractères."
                }, 400);
            }

            const search = teamCode.toLowerCase();
            matchsFiltres = matchsFiltres.filter(m => 
                m.homeTeam.code.value.toLowerCase() === search || 
                m.awayTeam.code.value.toLowerCase() === search
            );
        }

        // filtrage par date
        if (date){
            const date_ER = /^\d{4}-\d{2}-\d{2}$/;
            if (!date_ER.test(date)){
                throw new HTTPException(400, {
                    message : "Le format de date est invalide."
                });
            }

            matchsFiltres = matchsFiltres.filter(match => {
                const match_date = match.date.toISOString().split("T")[0];
                return match_date === date;
            });
        }
        
        
        return c.json({
            success : true,
            message : "All matchs",
            data : matchsFiltres // renvoie la liste des matchs filtrés
        }, 200);
    }
}