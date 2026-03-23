import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";

export class GetMatchsHandler {
    async handle(c : Context){
        
        const teamCode = c.req.query("team[code]");
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
        
        
        return c.json({
            success : true,
            message : teamCode ? `Matchs filtered by team[code] : ${teamCode}` : "All matchs",
            data : matchsFiltres // renvoie la liste des matchs filtrés
        }, 200);
    }
}