Feature: Loose Health
  As a player
  I should loose health if i wait long

@loosehealth
  Scenario: 
    Given that I am at "http://localhost:3000/"
    When I press wait i should loose 10 health
    When I press wait again i should loose 5 health
    Then My Health Bar should be at 35 