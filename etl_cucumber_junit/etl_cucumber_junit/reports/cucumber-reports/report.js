$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/demo.feature");
formatter.feature({
  "name": "User Certification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User is Passed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the user Tamil is given a task to clear Java certification exam",
  "keyword": "Given "
});
formatter.match({
  "location": "Demo_StepDefinitions.certificationName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tamil got 60 marks in exam",
  "keyword": "When "
});
formatter.match({
  "location": "Demo_StepDefinitions.gotMarks(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tamil is known as Java certified",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo_StepDefinitions.certifiedYes(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/oracle.feature");
formatter.feature({
  "name": "Oracle Connection",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Oracle Connection Successful",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I establish a connection with \"Oracle\" Database",
  "keyword": "Given "
});
formatter.match({
  "location": "Oracle_StepDefinitions.i_establish_a_connection_with_Database(String)"
});
formatter.result({
  "error_message": "com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.\n\tat com.mysql.cj.jdbc.exceptions.SQLError.createCommunicationsException(SQLError.java:174)\n\tat com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:64)\n\tat com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:833)\n\tat com.mysql.cj.jdbc.ConnectionImpl.\u003cinit\u003e(ConnectionImpl.java:453)\n\tat com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:246)\n\tat com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:664)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:247)\n\tat stepdefs.Oracle_StepDefinitions.i_establish_a_connection_with_Database(Oracle_StepDefinitions.java:34)\n\tat ✽.I establish a connection with \"Oracle\" Database(src/test/resource/oracle.feature:4)\nCaused by: com.mysql.cj.exceptions.CJCommunicationsException: Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:61)\n\tat com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:105)\n\tat com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:151)\n\tat com.mysql.cj.exceptions.ExceptionFactory.createCommunicationsException(ExceptionFactory.java:167)\n\tat com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:89)\n\tat com.mysql.cj.NativeSession.connect(NativeSession.java:144)\n\tat com.mysql.cj.jdbc.ConnectionImpl.connectOneTryOnly(ConnectionImpl.java:953)\n\tat com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:823)\n\tat com.mysql.cj.jdbc.ConnectionImpl.\u003cinit\u003e(ConnectionImpl.java:453)\n\tat com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:246)\n\tat com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:664)\n\tat java.sql.DriverManager.getConnection(DriverManager.java:247)\n\tat stepdefs.Oracle_StepDefinitions.i_establish_a_connection_with_Database(Oracle_StepDefinitions.java:34)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat com.mysql.cj.protocol.StandardSocketFactory.connect(StandardSocketFactory.java:155)\n\tat com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:63)\n\t... 47 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I executed \"select 1 from dual\" query",
  "keyword": "When "
});
formatter.match({
  "location": "Oracle_StepDefinitions.i_executed_query(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should get the result as connection \"success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Oracle_StepDefinitions.i_should_get_the_result_as_connection(String)"
});
formatter.result({
  "status": "skipped"
});
});