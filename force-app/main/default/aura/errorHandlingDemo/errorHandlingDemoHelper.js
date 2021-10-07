({
  callAction: function (component, methodName, handleErrors) {
    var action = component.get("c." + methodName);
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (component.isValid() && state === "SUCCESS") {
        var result = response.getReturnValue();
      }
      if (handleErrors) {
        if (state === "INCOMPLETE") {
          console.warn("incomplete");
        } else if (state === "ERROR" || state === "ABORTED") {
          var errors = response.getError();
          console.log(JSON.parse(JSON.stringify(errors)));
          if (errors) {
            if (errors[0] && errors[0].message) {
              console.error("Error message: " + errors[0].message);
            }
          } else {
            console.error("Unknown error");
          }
        }
      }
    });
    console.log("Executing: " + methodName);
    $A.enqueueAction(action);
  }
});
