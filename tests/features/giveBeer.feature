Feature: Give Beer
  As a player
  I should be able to trade beer

  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 Dollars
    Then I get a beer from the bar and give it to the barista. I should revieve 2 free espressos from him