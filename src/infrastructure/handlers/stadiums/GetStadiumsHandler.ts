import type { Context } from "hono";
import { stadiums } from "@infrastructure/mock/stadiums";

export class GetStadiumsHandler {
    async handle(c: Context){
        const nameFilter = c.req.query("name");
        let stadiumsSorted = [...stadiums];

        if (nameFilter) {
            const search = nameFilter.toLowerCase();
            stadiumsSorted = stadiumsSorted.filter(stadium => 
                stadium.name.toLowerCase().includes(search)
            );
        }

        return c.json({ 
            success: true, 
            data : stadiumsSorted,
            message : "All stadiums"
        }, 200);
    
    }
}