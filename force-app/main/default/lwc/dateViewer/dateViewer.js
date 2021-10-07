import { LightningElement, api } from "lwc";

/**
 * Display some date values according to settings
 */
export default class DateViewer extends LightningElement {
  @api
  showDayOfWeek = false;

  @api
  showNextDayOfWeek = false;

  _logPublicProperties = true;

  @api
  get logPublicProperties() {
    return this._logPublicProperties;
  }

  set logPublicProperties(value) {
    this._logPublicProperties = value;
  }

  constructor() {
    super();
    console.log(
      ` >> c-date-viewer: constructor() [Has No Access to Public Properties]`
    );
  }

  connectedCallback() {
    console.log(
      ` >> c-date-viewer: connectedCallback() ${this.additionalLogDetails}`
    );
  }

  renderedCallback() {
    console.log(
      ` >> c-date-viewer: renderedCallback() ${this.additionalLogDetails}`
    );
  }

  disconnectedCallback() {
    console.log(
      ` >> c-date-viewer: disconnectedCallback() ${this.additionalLogDetails}`
    );
  }

  get additionalLogDetails() {
    try {
      if (this._logPublicProperties) {
        return `{ "showDayOfWeek": ${this.showDayOfWeek}, "showNextDayOfWeek": ${this.showNextDayOfWeek}}`;
      }
    } catch (error) {
      return "";
    }
    return "";
  }

  get dateValue() {
    let dayOfWeek;
    if (this.showDayOfWeek) {
      let today = new Date();
      dayOfWeek = today.toLocaleString("default", { weekday: "long" });
    }
    if (this.showNextDayOfWeek) {
      let dateToCalculate = new Date();
      let numberOfDayToAdd = 1;
      dateToCalculate.setDate(dateToCalculate.getDate() + numberOfDayToAdd);
      dayOfWeek = dateToCalculate.toLocaleString("default", {
        weekday: "long"
      });
    }
    console.log(` >> c-date-viewer: Getter for dateValue (${dayOfWeek})`);
    return dayOfWeek ? dayOfWeek : "No Date Configuration";
  }
}
