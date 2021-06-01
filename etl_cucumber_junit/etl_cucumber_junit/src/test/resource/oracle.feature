Feature: Oracle Connection

  Scenario: Oracle Connection Successful
    Given I establish a connection with "Oracle" Database
    When I executed "select 1 from dual" query
    Then I should get the result as connection "success"
