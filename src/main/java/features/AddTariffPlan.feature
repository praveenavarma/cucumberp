#Author: your.email@your.domain.com

Feature: To test add tariff plan functionality
  @tag2
  Scenario Outline: To verify the success message
    Given The user is in add tariff plan page
    When the user fill in the valid tariff plan details "<monthRent>","<freeLocal>","<freeRent>","<freeSms>","<localCharges>","<interCharges>","<smsCharges>"
    And the user clicks the submit button
    Then the user should see the success message

    Examples: 
      | monthRent| freeLocal |freeRent  |freeSms|localCharges|interCharges|smsCharges|
      | 500      |        500|100       |501    |  300       |101         |400       |
      | 501      |     502   |101       |502    |  503       |102         |402       |
