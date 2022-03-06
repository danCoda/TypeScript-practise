export class Invoice {
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
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${details}`;
  }
}
