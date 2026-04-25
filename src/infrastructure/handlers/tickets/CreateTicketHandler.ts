import type { Context } from "hono";
import { tickets } from "@infrastructure/mock/tickets";
import { HTTPException } from "hono/http-exception";
import { CreateTicketSchema } from "./CreateTicketSchema";
import { matchs } from "@infrastructure/mock/matchs";
import { Ticket } from "@domain/entities/Ticket";

export class CreateTicketHandler {
    async handle (c : Context){

        // opération asynchrone pour la lecture du body
        const body = await c.req.json();

        // schéma Zod pour valider le body
        const result = CreateTicketSchema.safeParse(body);

        // si la validation échoue : 
        if(!result.success){
            throw new HTTPException (400, {
                message: result.error.issues[0]?.message || "Données invalides"
            });
        }

        const { matchId, seat, customer, holder } = result.data;

        // vérification si le match identifié existe :
        const match = matchs.find(m => m.id === matchId);
        if (!match) {
            throw new HTTPException (404, {
                message : "Le match identifié n'existe pas."
            });
        }

        // vérifier que le siège n'est pas déjà réservé
        const isSeatReserved = tickets.some(t => t.match.id === matchId && t.seat === seat);
        if (isSeatReserved){
            throw new HTTPException (409, {
                message : "Ce siège a déjà été réservé."
            });
        }

        // création d'une instance Ticket
        const newId = tickets.length + 1;
        const newTicket = new Ticket(
            newId, 
            match, 
            seat, 
            { 
                firstname: customer.firstname, 
                lastname: customer.lastname, 
                email: holder.email 
            }
        );
        // ajout de cette instance au tableau tickets
        tickets.push(newTicket);

        // body au format JSON de la réponse HTTP
        return c.json({
            "success" : true,
            "message" : "Ticket created",
            "data": {
                "matchId" : newTicket.match.id,
                "seat" : newTicket.seat,
                "holder": {
                    "firstName" : newTicket.holder.firstname,
                    "lastName" : newTicket.holder.lastname,
                    "email" : newTicket.holder.email
                }
            }
        }, 201);
    }
}