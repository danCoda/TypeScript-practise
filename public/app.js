// Interfaces are just used to 'describe' only, while Classes are used to create new objects. Very subtle difference...
const me = {
    name: "Dan",
    age: 34,
    speak(text) {
        return 23;
    },
    spend(amount) {
        return amount;
    }
};
import { Invoice } from "./classes/invoice.js"; // Must be .js!
const invoiceOne = new Invoice("Mario", "work on website", 350);
const invoiceTwo = new Invoice("Luigi", "work on website", 200);
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//console.log(invoiceOne.client);
console.log(invoiceOne.details);
//invoiceOne.amount = 500;
//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
