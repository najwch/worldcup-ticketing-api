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
        public readonly date : Date)
    
    {
        if (id <= 0){
            throw new Error ("Le numéro d'id doit être supérieur à 0.")
        }

        if (homeScore < 0){
            throw new Error ("Le score doit être supérieur ou égal à 0.")
        }

        if (awayScore < 0){
            throw new Error ("Le score doit être supérieur ou égal à 0.")
        }

        if(homeTeam == awayTeam){
            throw new Error ("Les deux équipes doivent être différentes.")
        }
    }

    public isDraw() : boolean {
        return this.homeScore == this.awayScore;
    }

    public winner() : Team | null {
        return null;
    }
}