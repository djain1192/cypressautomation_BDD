Feature: End to end Ecommerce validation

    application Regression

   
    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When  I add items to cart
        Then Select the country submit and verify Thankyou

  
    Scenario: Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
        |name | | gender |
        |dj | | Male |
        Then validate the forms behaviour
        And select the Shop Page


