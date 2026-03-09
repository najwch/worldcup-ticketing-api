import { City } from "./city";

export class Stadium {
    constructor (
        public readonly name : string,
        public readonly city : City,
        public readonly capmacity :  number
    )
    {}
}