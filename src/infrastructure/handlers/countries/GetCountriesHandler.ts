import type { Context } from "hono";
import { countries } from "@infrastructure/mock/countries";

export class GetCountriesHandler {
    async handle(c: Context){
        const nameFilter = c.req.query("name");
        let countriesSorted = [...countries];

        if (nameFilter) {
            const search = nameFilter.toLowerCase();
            countriesSorted = countriesSorted.filter(country => 
                country.name.toLowerCase().includes(search)
            );
        }

        return c.json({ 
            success: true, 
            data : countriesSorted,
            message : "All countries"
        }, 200);
    }
}