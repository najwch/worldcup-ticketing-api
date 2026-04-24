import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { countries } from "@infrastructure/mock/countries";
import { cities } from "@infrastructure/mock/cities";

export class GetCountryCitiesHandler {
    async handle (c : Context){

        const countryCode = c.req.param("code").toLowerCase();

        const country = countries.find(c => c.code === countryCode);

        // dans le cas où le pays n'existe pas
        if (!country){
            throw new HTTPException(404, {
                message : "Le pays n'existe pas."
            })
        }

        // dans le cas où c'est OK
        const countryCities = cities.filter(city => city.country.code === countryCode);

        return c.json({
            success : true,
            data : countryCities,
            message : "Cities in USA"
        }, 200);

    }
}