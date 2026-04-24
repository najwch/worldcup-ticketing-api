import type { Context } from "hono";
import { teams } from "@infrastructure/mock/teams";

export class GetTeamsHandler {
    async handle(c: Context){
        const sort = c.req.query("sort");
        const nameFilter = c.req.query("name");
    
        
        // dans le cas où les paramètres sont incorrects => ERREUR
        if (sort && sort !== "name" && sort !== "-name") {
            return c.json({
                success: false, 
                error: "Le paramètre sort doit être 'name' ou '-name'" 
            }, 400);
        }

        let teamsSorted = [...teams];

        if (nameFilter) {
            const search = nameFilter.toLowerCase();
            teamsSorted = teamsSorted.filter(team => 
                team.name.toLowerCase().includes(search)
            );
        }

        teamsSorted.sort((a, b) => {
            return sort === "-name" 
                ? b.name.localeCompare(a.name) 
                : a.name.localeCompare(b.name);
        });

        return c.json({ 
            success: true, 
            data: teamsSorted, 
            message : `Teams filtered by name: ${nameFilter?.toLowerCase()}` 
        }, 200);
    }
}
