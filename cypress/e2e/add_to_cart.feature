Feature: Add to Cart

Scenario: As a User, I should be able to add items to the cart
    Given I am logged in
    And I am on the product page
    When I add an item to the cart
    Then the item should be added successfully
