import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    //amount getter method
    get amount() {
        return this._amount;
    }

    //amount setter method
    set amount(amount) {
        this._amount = amount;
    }

    //currency getter method
    get currency() {
        return this._currency;
    }

    //currency setter method;
    set currency(currency) {
        this._currency = currency
    }

    //displayFullPrice method
    displayFullPrice() {
        return this._amount + " " + this._currency.name + " " + "(" + this._currency.code + ")";
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}