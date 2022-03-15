import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import LocationMap from "../../src/components/LocationMap";
import LocationConfigFixture from "../__fixtures/LocationConfig";

describe("LocationMap", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LocationMap location={LocationConfigFixture} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
