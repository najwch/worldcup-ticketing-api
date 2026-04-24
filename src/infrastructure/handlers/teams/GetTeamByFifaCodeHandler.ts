import type { Context } from "hono";
import { teams } from "@infrastructure/mock/teams";
import { FifaCode } from "@domain/value-objects/FifaCode";

export class GetTeamByFifaCodeHandler {
    async handle(c : Context){
        const fifacode = c.req.param("fifaCode");

        // dans le cas où le code ne respecte pas le format FIFA
        try {
            new FifaCode(fifacode); 
        } catch (e) {
            return c.json({ success: false, error: "Bad Request" }, 400); 
        }

        const team = teams.find(t => t.code.value === fifacode.toUpperCase());
        // dans le cas où aucune équipe ne correspond au code
        if (!team) {
            return c.json({ success: false, error: "Not found" }, 404);
        }
        // autre cas où c'est ok
        return c.json({ 
            success: true, 
            data: team, 
            message : `Team ${fifacode.toUpperCase()}`
        }, 200);
    }
}