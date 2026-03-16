import { City } from "@domain/entities/city";
import { countries } from "./countries";

const usa = countries.find(c => c.name === "USA")!;
const mexico = countries.find(c => c.name === "Mexico")!;
const canada = countries.find(c => c.name === "Canada")!;

export const cities = [
    new City (usa, "Atlanta"),
    new City (mexico, "Mexico City"),
    new City (canada, "Toronto")
]