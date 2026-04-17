import type { Context } from "hono";
import { stadiums } from "@infrastructure/mock/stadiums";
import { HTTPException } from "hono/http-exception";

export class GetStadiumByNameHandler {
    async handle (c : Context){
        const stadiumname = c.req.param("name");

        // recherche insensible à la casse
        const stadium = stadiums.find(
            (s) => s.name.toLowerCase() === stadiumname.toLowerCase()
        );

        // dans le cas où le stade n'existe pas 
        if (!stadium){
            throw new HTTPException (404, {
                message : "Le stade n'existe pas."
            })
        }

        // dans le cas où c'est OK

        return c.json({
            success : true,
            message : "",
            data : stadium
        }, 200)
    }
}