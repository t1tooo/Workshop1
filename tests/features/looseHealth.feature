Feature: Loose Health
  As a player
  I should loose health if i wait long

  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I have spawned infront of the cafe. I should have 50 health and 10 Dollars
    When I press wait i dhould loose 5 health
    When I press wait again i should loose 10 health
    Then My Health Bar should be at 35 