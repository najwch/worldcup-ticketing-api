import { Match } from "./match";

export class Ticket {
    constructor (
        public readonly id : number,
        public readonly match : Match,
        public readonly seat : string,
        // public readonly holder : Holder,
    ){
        if (id <= 0){
            throw new Error ("L'identifiant doit être supérieur à 0.");
        }

        if (seat === null || seat.trim().length === 0){
            throw new Error ("Le numéro de siège doit être non vide.");
        }
    }
}