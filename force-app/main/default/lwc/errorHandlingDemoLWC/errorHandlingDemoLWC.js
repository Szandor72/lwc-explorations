import { LightningElement } from "lwc";
import throwCustomException from "@salesforce/apex/JavascriptExceptions.throwCustomException";
import throwAuraHandledException from "@salesforce/apex/JavascriptExceptions.throwAuraHandledException";
import throwDMLException from "@salesforce/apex/JavascriptExceptions.throwDMLException";
import divideByZero from "@salesforce/apex/JavascriptExceptions.divideByZero";

export default class ErrorHandlingDemoLWC extends LightningElement {
  isErrorHandlingEnabled = false;

  toggleErrorHandling(event) {
    this.isErrorHandlingEnabled = event.target.checked;
  }

  throwCustomException() {
    console.log("Throw Custom Exception");
    throwCustomException()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  throwAuraHandledException() {
    console.log("Throw Aura Handled Exception");
    throwAuraHandledException()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  throwDMLException() {
    console.log("Throw DMLException");
    throwDMLException()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  divideByZero() {
    console.log("Divide by Zero");
    divideByZero()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleError(error) {
    if (!this.isErrorHandlingEnabled) {
      return;
    }
    console.log(JSON.parse(JSON.stringify(error)));
    console.error(`Error message: ${error.body.message}`);
  }
}
