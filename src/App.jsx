import React, { useEffect, useState } from "react";
import timelineItems from "./timelineItems";
import VerticalTimeline from "./components/VerticalTimeline/VerticalTimeline";
import formatEvents from "./utils/formatEvents";
import DaysGrid from "./components/DaysGrid/DaysGrid";
import AddButton from "./components/AddButton/AddButton";
import EventForm from "./components/EventForm/EventForm";
import styled from "styled-components";

const SCGeneralWrapper = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
`;

const App = () => {
  const [events, setEvents] = useState(formatEvents(timelineItems));
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  const onClick = () => {
    showModal && setSelectedEvent(undefined);
    setShowModal((prev) => !prev);
  };

  const addNewEvent = (newEvent) => {
    setEvents((prev) => {
      const newEvents = [...prev];
      const newID =
        newEvents.reduce((max, obj) => {
          return obj.id > max ? obj.id : max;
        }, 0) + 1;
      newEvents.push({ ...newEvent, id: newID });

      return newEvents;
    });
  };

  useEffect(() => {
    if (selectedEvent) {
      onClick();
    }
  }, [selectedEvent]);

  const editEvent = (event) => {
    setEvents((prev) => {
      const newEvents = prev.map((item) => {
        if (item.id === event.id) return event;
        return item;
      });
      return newEvents;
    });
  };

  const deleteEvent = (event) => {
    setEvents((prev) => {
      const newEvents = prev.filter((item) => item.id !== event.id);
      return newEvents;
    });
  };

  return (
    <div>
      <SCGeneralWrapper>
        <DaysGrid events={events} />
        <VerticalTimeline
          events={events}
          setSelectedEvent={setSelectedEvent}
          deleteEvent={deleteEvent}
        />
      </SCGeneralWrapper>
      <AddButton onClick={onClick} />

      {showModal && (
        <EventForm
          onClick={onClick}
          addNewEvent={addNewEvent}
          editEvent={editEvent}
          selectedEvent={selectedEvent}
        />
      )}
    </div>
  );
};

export default App;
