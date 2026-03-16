import { Team } from "@domain/entities/team";
import { FifaCode } from "@domain/value-objects/FifaCode";

export const teams = [
    new Team ("France", new FifaCode("FRA")),
    new Team ("Maroc", new FifaCode("MAR")),
    new Team ("Brésil", new FifaCode("BRA")),
    new Team ("Japon", new FifaCode("JPN")),
    new Team ("Nouvelle-Zélande", new FifaCode("NZL")),
    new Team ("Colombie", new FifaCode("COL"))
]