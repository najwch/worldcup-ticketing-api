import type { Stadium } from "./stadium";
import { Team } from "./team";
import { MatchStatus } from "../MatchStatus";
import { MatchStage } from "./MatchStage";

export class Match {
    
    constructor (
        public readonly id : number,
        public readonly homeTeam : Team,
        public readonly awayTeam : Team,
        public readonly homeScore : number = 0,
        public readonly awayScore : number = 0,
        public readonly homeScoreExtraTime : number | null,
        public readonly awayScoreExtraTime : number | null,
        public readonly homeScoreShootOut : number | null,
        public readonly awayScoreShootOut : number | null,
        public readonly stadium : Stadium,
        public readonly status : MatchStatus,
        public readonly stage : MatchStage,
        public readonly date : Date
        
    ){}
}