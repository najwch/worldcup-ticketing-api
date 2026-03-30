import type { Context } from "hono";
import { matchs } from "@infrastructure/mock/matchs";
import { HTTPException } from "hono/http-exception";

export class GetMatchsByStatusHandler {
    async handle (c : Context){
        const status = c.req.query("status");

        // dans le cas où la valeur de status ne fait pas partie des valeurs autorisées
        const validStatus = ["scheduled", "live", "finished", "cancelled"];

        if(!status || validStatus.includes(status.toLowerCase())){
            throw new HTTPException (400, {
                message : "La valeur de status ne fait pas partie des valeurs autorisées."
            } )
        }

        const matchsFiltres = matchs.filter(m => 
            String(m.status).toLowerCase() === status.toLowerCase()
        );

        // dans le cas où c'est OK
        return c.json({
            success : true,
            message : `Matchs with status ${status}`,
            data : matchsFiltres // renvoie la liste des matchs filtrés
        }, 200);


    }
}