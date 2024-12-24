Feature: Loose Health
  As a player
  I should loose health if i wait long

  @health
  Scenario: 
    Given that I de "http://localhost:3000/"
    When I press wait i should loose 10 health
