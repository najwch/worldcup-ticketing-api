import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { cities } from "@infrastructure/mock/cities";

export class GetCityByNameHandler {
    async handle (c: Context){

        const cityName = c.req.param("name").toLowerCase();

        const city = cities.find(c => c.name.toLowerCase() === cityName);

        // dans le cas où la ville n'existe pas
        if (!city){
            throw new HTTPException(404, {
                message : "La ville n'existe pas."
            })
        }

        // dans le cas où c'est OK
        return c.json({
            success : true, 
            data : city, 
            message : `Cities filtered by name: ${cityName}`
        }, 200)
    }
}