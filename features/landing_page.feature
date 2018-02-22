Feature: Landing page

  Scenario: User is not signed in

    Given no user is signed in
    When user accesses the main page
    Then the system presents the default landing page
