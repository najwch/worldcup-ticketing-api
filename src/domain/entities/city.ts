import type { Country } from "./country";

export class City {
    constructor(
        public readonly country : Country,
        public readonly name : string
    )
    {
        const cities_of_usa = ["Atlanta", "Boston", "Dallas", "Houston", "Kansas City", "Los Angeles", "Miami", "New York", "Philadelphia", "Seattle", "San Francisco"];
        const cities_of_mexico = ["Guadalajara", "Mexico City", "Monterrey"];
        const cities_of_canada = ["Toronto", "Vancouver"];

        if (country.name == "USA" && !cities_of_usa.includes(name)){throw new Error ("La ville n'est pas située aux USA.");}
        if (country.name == "Mexico" && !cities_of_mexico.includes(name)){throw new Error ("La ville n'est pas située au Mexique.");}
        if (country.name == "Canada" && !cities_of_canada.includes(name)){throw new Error ("La ville n'est pas située au Canada.");}
    }
}
