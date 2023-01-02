import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    //getter method for sqft
    get sqft() {
        return this._sqft;
    }

    //getter method for floor;
    get floors() {
        return this._floors;
    }

    //Overrode evacuationWarningMessage
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`
    }
}