export default class Currency {
    constructor(code, name) {
        this._name = name;
        this._code = code;
    }

    // name getter method
    get name() {
        return this._name
    }

    //name set method
    set name(name) {
        this._name = name;
    }

    //code getter method
    get code() {
        return this._code;
    }

    //set code method
    set code(code) {
        this._code = code;
    }

    displayFullCurrency() {
        return this._name + " " + "(" + this._code + ")"
    }
}