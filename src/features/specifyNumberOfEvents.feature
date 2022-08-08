Feature: SPECIFY NUMBER OF EVENTS

Scenario: When the user hasnt specified a number, 32 is the default number
Given The user has started a new search and didn't change the filter settings
When They decide to keep searching without changing it
Then Each page will show the default amount

Scenario: Users can change the number of events they want to see
Given There are too few or too many search results
When  The user changes the number of listed evens
Then There are more or less results per page