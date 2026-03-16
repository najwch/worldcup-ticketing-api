import { Match } from "@domain/entities/match";
import { stadiums } from "./stadiums";
import { teams } from "./teams";
import { MatchStatus } from "@domain/MatchStatus";
import { MatchStage } from "@domain/entities/MatchStage";

export const matchs = [
    new Match (1, teams[0]!, teams[1]!, 0, 0, null, null, null, null, stadiums[0]!, MatchStatus.LIVE, MatchStage.GROUP, new Date()),
    new Match (2, teams[2]!, teams[3]!, 0, 0, null, null, null, null, stadiums[1]!, MatchStatus.LIVE, MatchStage.GROUP, new Date()),
    new Match (3, teams[4]!, teams[5]!, 0, 0, null, null, null, null, stadiums[2]!, MatchStatus.LIVE, MatchStage.GROUP, new Date())

]