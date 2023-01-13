# Meet App

a serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

<br>

## Installation

Install dependencies for meet with npm

```bash
  git clone https://github.com/LeezaJee/meet.git
  cd meet
  npm install
  
```
   
<br>

## Dependencies

**For Development**
- React
- React Bootstrap
- Recharts (for Data Visualization)

**For Testing**
- Jest
- Jest cucumber (ntegration Testing)
- Puppeteer (End-To-End-Testing)
- Enzyme
- Enzyme Adapter React 17
- Atatus browser testing

**Serverless**

AWS Lambda was utilized to 
- generate a token.
- pass it to the application after request

<br>

## Deployment

The app is deployed to github pages.

To deploy this project run

```bash
  npm run deploy
```
 
<br>

## Features

As a - User
I should be able to - “filter events by city”
So that - I can see the list of events that take place in that city 
  
  Feature 1: Filter events by city

    Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
      Given: user hasn’t searched for any city
      When: the user opens the app
      Then: the user should see the list of upcoming events.

    Scenario 2: User should see a list of suggestions when they search for a city
      Given: the main page is open
      When: the user starts typing in the city textbox
      Then: the user should receive a list of cities (suggestions) that match what they’ve typed

    Scenario 3: User can select a city from the suggested list
      Given: user was typing “Berlin” in the city textbox
      And the list of suggested cities is showing
      When: the user selects a city (e.g., “Berlin, Germany”) from the list
      Then: their city should be changed to that city (i.e., “Berlin, Germany”)
      And the user should receive a list of upcoming events in that city  

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
      Then: Each page will show the default amount

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
