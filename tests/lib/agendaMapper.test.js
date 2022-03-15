import { describe, it } from "@jest/globals";
import agendaConfigFixture from "../__fixtures/AgendaConfig";
import speakerFixture from "../__fixtures/Speaker";
import AgendaMapper from "../../src/lib/agendaMapper";
import { AgendaSlotType } from "../../src/lib/agendaSlotTypes";

const configuredContent = [
  {
    type: AgendaSlotType.SPEAKER,
    content: speakerFixture.slug,
    track: agendaConfigFixture.tracks[0],
    slot: agendaConfigFixture.time_slots[0],
  },
  {
    type: AgendaSlotType.SPEAKER,
    content: speakerFixture.slug,
    track: agendaConfigFixture.tracks[1],
    slot: agendaConfigFixture.time_slots[0],
  },
  {
    type: AgendaSlotType.TEXT,
    content: "test1",
    track: agendaConfigFixture.tracks[1],
    slot: agendaConfigFixture.time_slots[1],
  },
  {
    type: AgendaSlotType.TEXT,
    content: "test2",
    track: agendaConfigFixture.tracks[0],
    slot: agendaConfigFixture.time_slots[1],
  },
  {
    type: AgendaSlotType.TEXT,
    content: "test3",
    track: agendaConfigFixture.tracks[1],
    slot: agendaConfigFixture.time_slots[2],
  },
  {
    type: AgendaSlotType.TEXT,
    content: "test4",
    track: agendaConfigFixture.tracks[0],
    slot: agendaConfigFixture.time_slots[2],
  },
  {
    type: AgendaSlotType.SPEAKER,
    content: speakerFixture.slug,
    track: agendaConfigFixture.tracks[1],
    slot: agendaConfigFixture.time_slots[3],
  },
  {
    type: AgendaSlotType.SPEAKER,
    content: speakerFixture.slug,
    track: agendaConfigFixture.tracks[0],
    slot: agendaConfigFixture.time_slots[3],
  },
];

describe("AgendaMapper", () => {
  it("map the agenda slots with all track content in order", () => {
    const result = AgendaMapper(
      agendaConfigFixture.time_slots,
      agendaConfigFixture.tracks,
      configuredContent,
      [speakerFixture]
    );
    const [
      expected1,
      expected2,
      expected3,
      expected4,
      expected5,
      expected6,
      expected7,
      expected8,
    ] = configuredContent;
    expected1.content = speakerFixture;
    expected2.content = speakerFixture;
    expected7.content = speakerFixture;
    expected8.content = speakerFixture;

    expect(result[agendaConfigFixture.time_slots[0]]).toEqual([
      expected1,
      expected2,
    ]);
    expect(result[agendaConfigFixture.time_slots[1]]).toEqual([
      expected4,
      expected3,
    ]);
    expect(result[agendaConfigFixture.time_slots[2]]).toEqual([
      expected6,
      expected5,
    ]);
    expect(result[agendaConfigFixture.time_slots[3]]).toEqual([
      expected8,
      expected7,
    ]);
  });

  it("map the agenda slots with all track content empty in order", () => {
    const result = AgendaMapper(
      agendaConfigFixture.time_slots,
      agendaConfigFixture.tracks,
      [],
      [speakerFixture]
    );
    const expectedResult = {};
    agendaConfigFixture.time_slots.forEach(
      (slot) =>
        (expectedResult[slot] = agendaConfigFixture.tracks.map(function (
          track
        ) {
          return {
            slot: slot,
            track: track,
            content: "-",
            type: AgendaSlotType.TEXT,
          };
        }))
    );
    agendaConfigFixture.time_slots.forEach((slot) =>
      expect(result[slot]).toEqual(expectedResult[slot])
    );
  });
});
