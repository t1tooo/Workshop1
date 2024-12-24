Feature: Buy Espresso
  As a player
  I should be able to buy espresso with money

@buyEspresso
  Scenario: Buy Espresso
    Given that I am at "http://localhost:3000/"
    Then I Buy an espresso two times 
    Then I should have two espressos
