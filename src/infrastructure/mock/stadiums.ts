import { Stadium } from "@domain/entities/stadium";
import { cities } from "./cities";

export const stadiums = [
    new Stadium ("Mercedes-Benz Stadium", cities[0]!, 67_382),
    new Stadium ("Estadio Azteca", cities[1]!, 72_766),
    new Stadium ("BMO Field", cities[2]!, 45_000)
]