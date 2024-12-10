Feature: Die/Loose
  As a player
  I should loose the game if my health = 0

  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 Dollars
    Then I press wait until i die/loose
    Then My Health Bar should be at 0
    Then I should see a picture and a message "You health has deteriorated too much – you feel almost dead. Find a caffeine-detox clinic?"