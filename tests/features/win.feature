Feature: Win After 5 Espresso
  As a player
  I should win if I take 5 espressos

  Scenario: Player wins after taking 5 espressos
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 dollars
    Then I run through the game so I win
    Then I should win and see a picture with the win message "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"

