import { useState } from "react";
import {
  SCAddEventModalFallback,
  SCAddEventModal,
  SCForm,
  SCButtonWrapper,
  SCInput,
  SCInputWrapper,
  SCButton,
  SCHeader,
  SCTitle,
} from "./style";
import CloseButton from "../CloseButton/CloseButton";

const defaultValue = {
  name: "",
  start: "",
  end: "",
};

const EventForm = ({ onClick, addNewEvent, selectedEvent, editEvent }) => {
  const [newEvent, setNewEvent] = useState(selectedEvent || defaultValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "start" || name === "end") {
      const numericValue = value.replace(/\D/g, "");
      if (
        isNaN(numericValue) ||
        numericValue.length > 8 ||
        (value.length === 1 && isNaN(value))
      )
        return;
      if (numericValue.length >= 7) {
        formattedValue = `${numericValue.slice(0, 4)}/${
          numericValue.slice(4, 6) > 12 ? 12 : numericValue.slice(4, 6)
        }/${numericValue.slice(6)}`;
      } else if (numericValue.length >= 5) {
        formattedValue = numericValue.slice(0, 4) + "/" + numericValue.slice(4);
      }
    }

    setNewEvent({
      ...newEvent,
      [name]: formattedValue,
    });
  };

  const checkValidData = () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);
    if (start > end) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidData()) {
      alert("Start date should be smaller than end date");
      return;
    }
    if (selectedEvent) {
      editEvent(newEvent);
    } else {
      addNewEvent(newEvent);
    }
    setNewEvent(defaultValue);
    onClick();
  };

  return (
    <SCAddEventModalFallback>
      <SCAddEventModal>
        <SCHeader>
          <CloseButton onClick={onClick} />
        </SCHeader>
        <SCForm onSubmit={handleSubmit}>
          <SCTitle>NEW EVENT</SCTitle>
          <SCInputWrapper>
            <label htmlFor="name">Name:</label>
            <SCInput
              type="text"
              id="name"
              name="name"
              value={newEvent.name}
              onChange={handleChange}
              required
            />
          </SCInputWrapper>
          <SCInputWrapper>
            <label htmlFor="start">Start:</label>
            <SCInput
              type="text"
              id="start"
              name="start"
              pattern="\d{4}/\d{2}/\d{2}"
              value={newEvent.start}
              onChange={handleChange}
              required
            />
          </SCInputWrapper>
          <SCInputWrapper>
            <label htmlFor="end">End:</label>
            <SCInput
              type="text"
              id="end"
              name="end"
              pattern="\d{4}/\d{2}/\d{2}"
              value={newEvent.end}
              onChange={handleChange}
              required
            />
          </SCInputWrapper>
          <SCButtonWrapper>
            <SCButton type="submit">Submit</SCButton>
          </SCButtonWrapper>
        </SCForm>
      </SCAddEventModal>
    </SCAddEventModalFallback>
  );
};

export default EventForm;
