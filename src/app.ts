class Invoice {
  /* private client: string;
  details: string;
  readonly amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  } */

  constructor(
    private client: string,
    public details: string,
    readonly amount: number
  ){};
  
  format() {
    return `${this.client} owes $${this.amount} for ${details}`;
  }
}

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
