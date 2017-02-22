Feature: Open Webpage
  Scenario: User Opens the webpage
    Given I open the homepage for WeDebug
    When the page is fully loaded
    Then I should see the name "Fathea Chowdhury"