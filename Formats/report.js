$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber/Cucumber/test.feature");
formatter.feature({
  "line": 1,
  "name": "Refund on a product",
  "description": "This is a features works on the scenario of refunding the money\r\nif there is a proper purchase of product and the refund is valid",
  "id": "refund-on-a-product",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Accessing with a valid user name and password",
  "description": "",
  "id": "refund-on-a-product;accessing-with-a-valid-user-name-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am  a registered user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I update my user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "should get access to the Dashboard",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepDef.i_update_my_user_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.i_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.should_get_access_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Accessing with an invalid user name",
  "description": "",
  "id": "refund-on-a-product;accessing-with-an-invalid-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am not a registered user on the webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I update my user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get a error  message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.i_am_not_a_registered_user_on_the_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.i_update_my_user_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.i_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.i_should_get_a_error_message()"
});
formatter.result({
  "status": "skipped"
});
});