import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";

import Organizers from "../../src/components/Organizers";
import OrganizersConfigFixture from "../__fixtures/OrganizersConfig";

describe("Organizers", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Organizers organizers={OrganizersConfigFixture} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
