import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    public details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
