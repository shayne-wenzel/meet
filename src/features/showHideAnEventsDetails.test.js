import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  <></>;
  let AppWrapper;

  // Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('The events just loaded on the page', () => {
      AppWrapper = mount(<App />);
    });

    when('The user has not clicked the link yet', () => {});

    then(
      'The element remains collapsed',
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event-details")).toHaveLength(0);
      }
    );
  });

  // Scenario 2
  test('The user can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    <></>;

    given('The user wants to see more detail of a particular event', async () => {
      AppWrapper = await mount(<App />);
    });

    when('They click the link to expand the details', () => {
      AppWrapper.update();
      AppWrapper.find(".btn-details").at(0).simulate("click");
    });

    then(
      'The details are shown',
      () => {
        expect(AppWrapper.find(".event-details")).toHaveLength(1);
      }
    );
  });

  // Scenario 3
  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    <></>;
    given('The user is done reading the details', () => {
      expect(AppWrapper.find(".event-details")).toHaveLength(1);
    });

    when('The user clicks the like to hide the details', () => {
      AppWrapper.find(".btn-details").at(0).simulate("click");
    });

    then('The details are hidded', () => {
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});
