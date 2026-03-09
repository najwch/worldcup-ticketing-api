import type { Country } from "./country";

export class City {
    constructor(
        public readonly country : Country,
        public readonly name : string
    )
    {}
}
