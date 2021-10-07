import { LightningElement, api } from "lwc";

/**
 * Throws an error when implemented
 */
export default class ThrowError extends LightningElement {
  constructor() {
    super();
    console.log("constructor() - my error cmp");
    throw new Error("Fubar");
  }
}
