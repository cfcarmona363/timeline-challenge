import getDaysBeteenDates from "../../utils/getDaysBetweenDates";
import getLimitDates from "../../utils/getLimitDates";
import DeleteButton from "../DeleteButton/DeleteButton";
import {
  SCTimelineContainer,
  SCTimelineItem,
  SCTimeLineItemContainer,
  SCHeader,
} from "./styles";

const VerticalTimeline = ({ events, setSelectedEvent, deleteEvent }) => {
  const limitDates = getLimitDates(events);
  const daysCount = getDaysBeteenDates(
    limitDates.limitDateStart,
    limitDates.limitDateEnd
  );

  return (
    <SCTimelineContainer rows={daysCount}>
      {events.map((event) => (
        <SCTimeLineItemContainer
          key={event.id}
          start={getDaysBeteenDates(limitDates.limitDateStart, event.start)}
          end={getDaysBeteenDates(limitDates.limitDateStart, event.end) + 1}
        >
          <SCHeader>
            <DeleteButton onClick={() => deleteEvent(event)} />
            <SCTimelineItem onClick={() => setSelectedEvent(event)}>
              {event.name}
            </SCTimelineItem>
          </SCHeader>
        </SCTimeLineItemContainer>
      ))}
    </SCTimelineContainer>
  );
};

export default VerticalTimeline;
