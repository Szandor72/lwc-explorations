public class JavascriptExceptions {
  private class JavascriptExceptionsException extends Exception {
  }

  @AuraEnabled
  public static void throwCustomException() {
    throw new JavascriptExceptionsException(
      'This is a JavascriptExceptionsException message'
    );
  }

  @AuraEnabled
  public static void throwAuraHandledException() {
    throw new AuraHandledException('This is an AuraHandledException message');
  }

  @AuraEnabled
  public static void throwDMLException() {
    throw new System.DMLException('This is an DML Exception message');
  }

  @AuraEnabled
  public static void divideByZero() {
    Integer fault = 7 / 0;
  }
}
