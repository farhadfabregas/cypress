Feature: Login

Scenario: As a User, I should be able to login successfully
    Given I open the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the home page
