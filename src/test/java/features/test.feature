@tag1 @tag2
Feature: Accessing the Dashboard
This feature defines the different user access to a dashboard
and the restrictions from the same

@tag3
Scenario: Accessing with a valid user name and password

Given I am  a registered user on the web page
When I update my user credentials
And I click on Login
Then should get access to the Dashboard

@tag4
Scenario: Accessing with an invalid user name

Given I am not a registered user on the webpage
When I update my user credentials
And I click on Login
Then I should get a error  message
 
 