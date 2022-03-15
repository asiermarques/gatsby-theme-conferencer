import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";

import SpeakerCard from "../../src/components/SpeakerCard";
import SpeakerFixture from "../__fixtures/Speaker";

describe("SpeakerCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SpeakerCard speaker={SpeakerFixture} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
