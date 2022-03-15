import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Agenda from "../../src/components/Agenda";
import AgendaConfigFixture from "../__fixtures/AgendaConfig";
import SpeakerFixture from "../__fixtures/Speaker";
import AgendaMapper from "../../src/lib/agendaMapper";

describe("Agenda", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Agenda
          time_slots={AgendaConfigFixture.time_slots}
          tracks={AgendaConfigFixture.tracks}
          agendaSlotMap={AgendaMapper(
            AgendaConfigFixture.time_slots,
            AgendaConfigFixture.tracks,
            [],
            [SpeakerFixture]
          )}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
