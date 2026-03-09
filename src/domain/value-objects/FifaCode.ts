export class FifaCode {
    public readonly value : string
    
    constructor (value : string){
        this.value = value;

        const value_constraint = /^[A-Z]{3}$/;

        if(!value_constraint.test(value)){
            throw new Error ("Le code FIFA doit contenir exactement 3 lettres majuscules.");
        }
    }
    
    public toString() : string {
            return this.value
    }
    
    public equals(other : FifaCode) : boolean {
        return this.value == other.toString();
    }
}