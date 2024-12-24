Feature: Die/Loose
  As a player
  I want to lose the game if my health reaches 0

@die

  Scenario: Player loses after health depletes
    Given that the site I am at "http://localhost:3000/"
    When I repeatedly press "Wait" until my health is 0
