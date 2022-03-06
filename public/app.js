"use strict";
var Invoice = /** @class */ (function () {
    /* private client: string;
    details: string;
    readonly amount: number;
  
    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    } */
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(details);
    };
    return Invoice;
}());
var invoiceOne = new Invoice("Mario", "work on website", 350);
var invoiceTwo = new Invoice("Luigi", "work on website", 200);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//console.log(invoiceOne.client);
console.log(invoiceOne.details);
//invoiceOne.amount = 500;
//const form = document.querySelector('form')!;
var form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
