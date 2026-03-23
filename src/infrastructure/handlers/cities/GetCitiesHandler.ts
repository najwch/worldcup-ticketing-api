import type { Context } from "hono";
import { cities } from "@infrastructure/mock/cities";

export class GetCitiesHandler {
    async handle(c: Context){
        const nameFilter = c.req.query("name");
        let citiesSorted = [...cities];

        if (nameFilter) {
            const search = nameFilter.toLowerCase();
            citiesSorted = citiesSorted.filter(city => 
                city.name.toLowerCase().includes(search)
            );
        }

        return c.json({ success: true, citiesSorted }, 200);
    }
}