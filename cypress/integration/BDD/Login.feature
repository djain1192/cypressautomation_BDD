Feature: Login

    I want to log into Conduit

    Scenario: Conduit Login
        Given I open Conduit login page
        When I type in username and password
        And I click on Sign in button
        Then "Your Feed" should be shown

