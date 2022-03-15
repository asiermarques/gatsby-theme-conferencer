import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Nav from "../../src/components/Nav";

describe("Nav", () => {
  it("renders correctly", () => {
    const data = [
      {
        title: "Test",
        link: "/test",
      },
    ];
    const tree = renderer.create(<Nav items={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
