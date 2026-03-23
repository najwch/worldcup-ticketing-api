import type { Context } from "hono";
import { cities } from "@infrastructure/mock/cities";
import { HTTPException } from "hono/http-exception";
import { matchs } from "@infrastructure/mock/matchs";

export class GetCityMatchsHandler{
    async handle(c : Context){
        const cityname = c.req.param("name");
        
                // recherche insensible à la casse sur le nom de la ville 
                const city = cities.find(
                    (v) => v.name.toLowerCase() === cityname.toLowerCase()
                );
        
                // dans le cas où la ville n'existe pas 
                if (!city){
                    throw new HTTPException(404, {
                        message : "La ville n'existe pas."
                    })
                }
        
        
                // dans le cas où c'est OK
                const matchsFiltres = matchs.filter(
                    (m) => m.stadium.city.name.toLowerCase() === city.name.toLowerCase()
                );
                
                return c.json({
                    success : true,
                    data : matchsFiltres // retourne la liste des matchs se déroulant dans le stade de la ville
                }, 200)
    }
}