import { FifaCode } from "../value-objects/FifaCode";

export class Team {
    constructor (
        public readonly name : string,
        public readonly code : FifaCode
    )
    {}
}