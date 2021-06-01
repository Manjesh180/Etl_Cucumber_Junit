Feature: User Certification

  Scenario: User is Passed
    Given that the user Tamil is given a task to clear Java certification exam
    When Tamil got 60 marks in exam
    Then Tamil is known as Java certified
