Feature: Accessing the Dashboard

Background: test the Background
Given I am a valid user

@tag1
Scenario Outline: Login
When I enter the username as <username>
And I enter the password as <password>
And I click on the SignIn button
Then I should be navigated to the dashboard

Examples:
|username|password|
|natarajan.ramanathan93@gmail.com|Welcome123|

@tag2
Scenario: Insurance Records
When I enter the insurance records
|name|email|phone|address|age|
|a|b|5|d|10|
|c|f|1|g|5|
And I post it
Then I should be able to retrieve the data from DB

