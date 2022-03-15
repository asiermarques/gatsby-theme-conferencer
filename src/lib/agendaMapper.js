import { AgendaSlotType } from "./agendaSlotTypes";

const AgendaMapper = (time_slots, tracks, contentConfig, speakers) => {
  const result = {};
  time_slots.forEach((slot) => {
    result[slot] = [];
    let remainingTracks = [...tracks];
    tracks.forEach((track) => {
      contentConfig.forEach((content) => {
        if (content.slot === slot && content.track === track) {
          result[slot].push({
            type: content.type,
            slot: slot,
            track: content.track,
            content:
              content.type === AgendaSlotType.SPEAKER
                ? speakers.find((speaker) => speaker.slug === content.content)
                : content.content,
          });
          remainingTracks = remainingTracks.splice(
            remainingTracks.indexOf(track),
            -1
          );
        }
      });
    });
    remainingTracks.forEach((track) =>
      result[slot].push({
        type: AgendaSlotType.TEXT,
        track: track,
        slot: slot,
        content: "-",
      })
    );
  });
  return result;
};

export default AgendaMapper;
