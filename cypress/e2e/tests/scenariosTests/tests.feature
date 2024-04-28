Feature: Test Automation Project - E2E and API

Scenario: E2E - Capture data from JSON and validate object data with id = 6
     Given the user to access the url with all the records
     When save objects in a JSON array
     Then the user validate the data object "<id>", "<albumId>", "<title>", "<url>" e "<thumbnailUrl>" must be as expected

    Examples:
    | id | albumId | title                                   | url                                    | thumbnailUrl                           |
    | 6  | 1       | accusamus ea aliquid et amet sequi nemo | https://via.placeholder.com/600/56a8c2 | https://via.placeholder.com/150/56a8c2 |


Scenario: API - GET request looking for a specific object
    Given I make a request to the endpoint searching for name "alias odio sit"
    Then the response status code should be "200"
    And the email of the returned object should be "Lew@alysha.tv"

Scenario: API - POST request including a new user
    Given I make a POST to the endpoint users including the user with the values "<name>", "<username>", "<email>", "<street>", "<suite>", "<city>", "<zipcode>", "<lat>", "<lng>", "<phone>", "<website>", "<nameCompany>", "<catchPhrase>" e "<bs>"
    Then the response status code for POST should be "201"
    And the id of the response should be returned

    Examples:
    |name          |username|email      |street        |suite|city         |zipcode  |lat     |lng    |phone   |website    |nameCompany |catchPhrase |bs          |
    |Monica Andrade|monica  |m@test.com |Lauro Linhares|333  |Florianópolis|88765-002|-37.2359|81.1696|72378238|cypress.org|Fake Company|Test Cypress|Test Cypress|


Scenario: API - PUT request changing data of an object
    Given I make a PUT to the endpoint users change "<email>", "<lat>" e "<lgn>" from user "<id>"
    Then the response status code for PUT should be "200"
    And the data must be changed successfully "<email>", "<lat>" e "<lgn>" for user "<id>"

    Examples:
    |id|email          |lat       |lgn     |
    |5 |monica@test.com|-33.3333  |44.4444 |