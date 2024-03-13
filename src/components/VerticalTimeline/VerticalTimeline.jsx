import getDaysBeteenDates from "../../utils/getDaysBetweenDates";
import getLimitDates from "../../utils/getLimitDates";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import {
  SCTimelineContainer,
  SCTimelineItem,
  SCTimeLineItemContainer,
  SCHeader,
  SCButtonWrapper,
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
            <SCButtonWrapper>
              <EditButton onClick={() => setSelectedEvent(event)} />
              <DeleteButton onClick={() => deleteEvent(event)} />
            </SCButtonWrapper>
            <SCTimelineItem>{event.name}</SCTimelineItem>
          </SCHeader>
        </SCTimeLineItemContainer>
      ))}
    </SCTimelineContainer>
  );
};

export default VerticalTimeline;
