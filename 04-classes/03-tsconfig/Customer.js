"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//let's create an instance //beispiel
let myCustomer = new Customer('martin', 'dikon');
myCustomer.firstName = 'martin';
myCustomer.lastName = 'dikon';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
