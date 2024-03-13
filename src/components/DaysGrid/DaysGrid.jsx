import getAllDatesBetween from "../../utils/getAllDateBetween";
import getDaysBeteenDates from "../../utils/getDaysBetweenDates";
import getLimitDates from "../../utils/getLimitDates";
import { SCGridItem, SCMainGrid } from "./styles";

const DaysGrid = ({ events }) => {
  const limitDates = getLimitDates(events);
  const daysCount = getDaysBeteenDates(
    limitDates.limitDateStart,
    limitDates.limitDateEnd
  );

  const allDates = getAllDatesBetween(
    limitDates.limitDateStart,
    limitDates.limitDateEnd
  );

  return (
    <SCMainGrid rows={daysCount}>
      {allDates.map((date) => (
        <SCGridItem key={date}>{date}</SCGridItem>
      ))}
    </SCMainGrid>
  );
};

export default DaysGrid;
