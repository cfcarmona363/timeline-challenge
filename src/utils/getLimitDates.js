export default function getLimitDates(events) {
  let limitDateEnd;
  let limitDateStart;
  events.forEach((event) => {
    if (event.end.localeCompare(limitDateEnd) > 0 || !limitDateEnd) {
      limitDateEnd = event.end;
    }
    if (event.start.localeCompare(limitDateStart) < 0) {
      limitDateStart = event.start;
    }
  });

  return { limitDateStart: limitDateStart, limitDateEnd: limitDateEnd };
}
