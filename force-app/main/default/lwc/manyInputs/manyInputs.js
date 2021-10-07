import { LightningElement } from "lwc";

export default class ManyInputs extends LightningElement {
  inputs = ["textOne", "textTwo", "textFour", "textFive", "textSix"];

  onInputChange(event) {
    this[event.target.name] = event.detail.value;
    console.log(`Value for textOne: ${this.textOne}`);
    console.log(`Value for textTwo: ${this.textTwo}`);
    // ...
  }
}
