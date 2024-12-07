Feature: Win After 5 Espresso
  As a player
  I should win if i take 5 Espressos

  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 Dollars
    When I run through the game so i win
    Then i should win and see a picture and the win Message "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
