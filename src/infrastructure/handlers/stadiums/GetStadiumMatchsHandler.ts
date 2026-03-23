import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { stadiums } from "@infrastructure/mock/stadiums";
import { matchs } from "@infrastructure/mock/matchs";

export class GetStadiumMatchsHandler{
    async handle (c : Context){
        const stadiumname = c.req.param("name");

        // recherche insensible à la casse sur le nom du stade 
        const stadium = stadiums.find(
            (s) => s.name.toLowerCase() === stadiumname.toLowerCase()
        );

        // dans le cas où le stade n'existe pas 
        if (!stadium){
            throw new HTTPException(404, {
                message : "Le stade n'existe pas."
            })
        }


        // dans le cas où c'est OK
        const matchsFiltres = matchs.filter(
            (m) => m.stadium.name.toLowerCase() === stadium.name.toLowerCase()
        );
        
        return c.json({
            success : true,
            data : matchsFiltres // retourne la liste des matchs joués dans un stade
        }, 200)
    }
}