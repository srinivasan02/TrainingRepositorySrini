$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/second.feature");
formatter.feature({
  "line": 1,
  "name": "Accessing the Dashboard",
  "description": "",
  "id": "accessing-the-dashboard",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login",
  "description": "",
  "id": "accessing-the-dashboard;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter the username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to the dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "accessing-the-dashboard;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "accessing-the-dashboard;login;;1"
    },
    {
      "cells": [
        "natarajan.ramanathan93@gmail.com",
        "Welcome123"
      ],
      "line": 15,
      "id": "accessing-the-dashboard;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "test the Background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "methodParameterisation.i_am_a_valid_user()"
});
formatter.result({
  "duration": 15238615193,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login",
  "description": "",
  "id": "accessing-the-dashboard;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter the username as natarajan.ramanathan93@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the password as Welcome123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be navigated to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 24
    }
  ],
  "location": "methodParameterisation.i_enter_the_username_as(String)"
});
formatter.result({
  "duration": 9337968278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 24
    }
  ],
  "location": "methodParameterisation.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 88723205,
  "status": "passed"
});
formatter.match({
  "location": "methodParameterisation.i_click_on_the_SignIn_button()"
});
formatter.result({
  "duration": 62027,
  "status": "passed"
});
formatter.match({
  "location": "methodParameterisation.i_should_be_navigated_to_the_dashboard()"
});
formatter.result({
  "duration": 36592,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 307532039,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "test the Background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "methodParameterisation.i_am_a_valid_user()"
});
formatter.result({
  "duration": 10948381197,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Insurance Records",
  "description": "",
  "id": "accessing-the-dashboard;insurance-records",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter the insurance records",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "phone",
        "address",
        "age"
      ],
      "line": 20
    },
    {
      "cells": [
        "a",
        "b",
        "5",
        "d",
        "10"
      ],
      "line": 21
    },
    {
      "cells": [
        "c",
        "f",
        "1",
        "g",
        "5"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I post it",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be able to retrieve the data from DB",
  "keyword": "Then "
});
formatter.match({
  "location": "methodParameterisation.i_enter_the_insurance_records(DataTable)"
});
formatter.result({
  "duration": 1777820,
  "status": "passed"
});
formatter.match({
  "location": "methodParameterisation.i_post_it()"
});
formatter.result({
  "duration": 33914,
  "status": "passed"
});
formatter.match({
  "location": "methodParameterisation.i_should_be_able_to_retrieve_the_data_from_DB()"
});
formatter.result({
  "duration": 36146,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 332302371,
  "status": "passed"
});
});