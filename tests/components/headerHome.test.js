import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Header from "../../src/components/HeaderHome";
import HeaderConfigFixture from "../__fixtures/HeaderConfig";

describe("HeaderHome", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header data={HeaderConfigFixture} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
