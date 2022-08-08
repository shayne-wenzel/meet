import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { extractLocations } from "../api";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
const locations = extractLocations(mockData);

defineFeature(feature, (test) => {
  <></>;

  let AppWrapper;
  let NumberOfEventsWrapper;

  // Scenario 1
  test('When the user hasnt specified a number, 32 is the default number', ({
    given,
    when,
    then,
  }) => {
    given('The user has started a new search and didn\'t change the filter settings', async () => {
      AppWrapper = await mount(<App />);
    });

    when('They decide to keep searching without changing it', () => {
      AppWrapper.update();
    });

    then(
      'Each page will show the default amount',
      () => {
        expect(AppWrapper.find(".event-visible")).toHaveLength(2);
      }
    );
  });

  // Scenario 2
  test('Users can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    given('There are too few or too many search results', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event-visible")).toHaveLength(2);
    });

    when('The user changes the number of listed evens', () => {
      const eventNumber = { target: { value: 1 } };
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ events: locations, eventCount: 1 });
      NumberOfEventsWrapper.find(".default").simulate("change", eventNumber);
      expect(AppWrapper.find(".default").props().value).toEqual(1);
      AppWrapper.update();
    });

    then(
      'There are more or less results per page',
      () => {
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(1);
        AppWrapper.unmount();
      }
    );
  });
});