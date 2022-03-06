/* interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// Interfaces are just used to 'describe' only, while Classes are used to create new objects. Very subtle difference...

const me: IsPerson = {
  name: "Dan",
  age: 34,
  speak(text: string) {
    return 23;
  },
  spend(amount: number) {
    return amount;
  }
}


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Dan", "studying", 300);
docTwo = new Invoice("James", "sicking", 100);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log("Hi", docOne.format());
 */

import { Invoice } from "./classes/invoice.js"; // Must be .js!
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

const invoiceOne = new Invoice("Mario", "work on website", 350);
const invoiceTwo = new Invoice("Luigi", "work on website", 200);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

//console.log(invoiceOne.client); // Won't work, as client is private.
//console.log(invoiceOne.details);
//invoiceOne.amount = 500; // Won't work, as amount is readonly.

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if(type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
  list.render(doc, type.value, "end");
  
});
