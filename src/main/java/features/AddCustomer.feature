
## Add Customer
Feature: To test add customer functionality

 @us1
  Scenario: To test the generate customer id functionality
    Given the user is in add customer page
    When The user fill in the valid customer details
    |firstName   |test          |
    |lastName    |selenium      |
    |emailAddress|test@gmail.com|
    |address		 |chennai       |
    |phNo        |7894561230    |
    And the user click the submit button
    Then the user should see the customer id generated 
    
  Scenario: To test the generate customer id functionality2
    Given the user is in add customer page
    When The user fill in the invalid customer details
    |firstName   |test          |
    |lastName    |selenium      |
    |emailAddress|testgmail.com|
    |address		 |chennai       |
    |phNo        |7894561230    |
    And the user click the submit button
    Then the user should see the error message 
   
   Scenario: To test the generate customer id functionality3
    Given the user is in add customer page
    When The user is not fill in the customer phone number
    |firstName   |test          |
    |lastName    |selenium      |
    |emailAddress|test@gmail.com|
    |address     |   chennai    |
    |phNo        |              |
    And the user click  submit button
    Then the user should see the popup message
    
      Scenario: To test the generate customer id functionality4
    Given the user is in add customer page
    When The user fill in the valid customer details
    |firstName   |test          |
    |lastName    |selenium      |
    |emailAddress|test@gmail.com|
    |address		 |chennai       |
    |phNo        |7894561230    |
    And the user click the reset button
    Then the user should see the empty fields
    