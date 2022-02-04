Feature: Login into App

    Scenario: Valid Login
        Given User is on login page
        #When User enters login credentials
        When User enters "tomsmith" and "SuperSecretPassword!"
        Then User should see home page
