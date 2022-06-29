As a - User
I should be able to - click on a link that can expand and collapse event details
So that - I can see it only when I want

  Feature 2: SHOW/HIDE AN EVENT'S DETAILS

    Scenario 1: An event element is collapsed by default
      Given: The events just loaded on the page
      When: The user has not clicked the link yet
      Then: The element remains collapsed

    Scenario 2: The user can expand an event to see its details
      Given: The user wants to see more detail of a particular event
      When:  They click the link to expand the details
      Then: The details are shown

    Scenario 3: User can collapse an event to hide its details
      Given: The user is done reading the details
      When: The user clicks the like to hide the details
      Then: The details are hidded

As a - User
I should be able to - filter how many events I see at a time
So that - I can see as few or many as I want at a time

  Feature 3: SPECIFY NUMBER OF EVENTS

    Scenario 1: When the user hasn’t specified a number, 32 is the default number
      Given: The user has started a new search and didn't change the filter settings
      When: They decide to keep searching without changing it
      Then: Each page will show only 32 results

    Scenario 2: Users can change the number of events they want to see
      Given: There are too few or too many search results
      When:  The user changes the number of listed evens
      Then: There are more or less results per page

As a - User
I should be able to - see events without the need of the internet
So that - so I can check event whenever I want

  Feature 4: USE THE APP WHEN OFFLINE

    Scenario 1: Show cached data when there’s no internet connection
      Given: The user is not connected to the internet
      When: The user opens the app
      Then: previously loaded or saved events are displayed

    Scenario 2: Show error when the user changes the settings (city, time range)
      Given: The user is not connected to the internet the 
      When: The users tries to search or change the filter settings.
      Then: An error message staing the need for internet to display changes

As a - User
I should be able to - see a chart that organizes upcoming events in a visual way
So that - so I have an easy-to-understand overview of events.

  Feature 5: DATA VISUALIZATION

    Scenario 1: Show a chart with the number of upcoming events in each city
      Given: The user a veriety of event s they are interested in or savved
      When: they open the section where they can view visual ied data
      Then: Charts and graphs are shown displaying the data
