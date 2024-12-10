Feature: Buy Espresso
  As a player
  I should be able to buy espresso with money

  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 Dollars
    Then I Buy an espresso 2 times i should have 2 espressos and 0 dallars

