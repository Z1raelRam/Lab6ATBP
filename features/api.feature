Feature: API Check
  Scenario: Get hello message
    Given I call the hello API
    Then I should get a success message