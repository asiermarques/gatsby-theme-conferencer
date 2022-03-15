import React from "react";
import { AgendaSlotType } from "../lib/agendaSlotTypes";

const Agenda = ({ time_slots, tracks, agendaSlotMap }) => (
  <section id="agenda">
    <div className="container">
      <h2 className="text-center">Agenda</h2>
      <div className="table-responsive-sm">
        <table
          id="agenda-table"
          className="table table-striped stacktable large-only"
        >
          <thead>
            <tr>
              <th />
              {tracks &&
                tracks.map((track, index) => (
                  <th key={index} width="40%">
                    {track.name}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {time_slots &&
              time_slots.map((slot, slot_index) => {
                return (
                  <tr key={slot_index}>
                    <td className="time">{slot}</td>
                    {agendaSlotMap[slot].map((content, index) => {
                      if (content.type === AgendaSlotType.SPEAKER) {
                        return (
                          <td key={index}>
                            <a href={content.content.slug + "#talk"}>
                              <h5>{content.content.talk.title}</h5>
                              <p>{content.content.name}</p>
                            </a>
                          </td>
                        );
                      } else {
                        return (
                          <td key={index}>
                            <p>{content.content}</p>
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
export default Agenda;
