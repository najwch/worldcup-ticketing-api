import { City } from "./city";

export class Stadium {
    constructor (
        public readonly name : string,
        public readonly city : City,
        public readonly capacity :  number
    )
    {
        if (capacity <= 0){
            throw new Error ("La capacité doit être supérieure à 0.");
        }
    }
}