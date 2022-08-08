Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given The events just loaded on the page
When The user has not clicked the link yet
Then The element remains collapsed

Scenario: The user can expand an event to see its details
Given The user wants to see more detail of a particular event
When  They click the link to expand the details
Then The details are shown

Scenario: User can collapse an event to hide its details
Given The user is done reading the details
When The user clicks the like to hide the details
Then The details are hidded