export class Invoice {
    /* private client: string;
      details: string;
      readonly amount: number;
    
      constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
      } */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${details}`;
    }
}