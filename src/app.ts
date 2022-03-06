interface IsPerson {
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

import { Invoice } from "./classes/invoice.js"; // Must be .js!

const invoiceOne = new Invoice("Mario", "work on website", 350);
const invoiceTwo = new Invoice("Luigi", "work on website", 200);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

//console.log(invoiceOne.client);
console.log(invoiceOne.details);
//invoiceOne.amount = 500;

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
