({
  onThrowCustomExceptionButtonClick: function (component, event, helper) {
    helper.callAction(
      component,
      "throwCustomException",
      component.get("v.handleErrors")
    );
  },

  onThrowAuraHandledExceptionButtonClick: function (component, event, helper) {
    helper.callAction(
      component,
      "throwAuraHandledException",
      component.get("v.handleErrors")
    );
  },

  onThrowDMLExceptionButtonClick: function (component, event, helper) {
    helper.callAction(
      component,
      "throwDMLException",
      component.get("v.handleErrors")
    );
  },

  onDivideByZeroButtonClick: function (component, event, helper) {
    helper.callAction(
      component,
      "divideByZero",
      component.get("v.handleErrors")
    );
  }
});
