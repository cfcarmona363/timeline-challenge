export default function formatEvents(events) {
  const sortedEvents = events.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start.localeCompare(b.start);
    } else {
      return a.end.localeCompare(b.end);
    }
  });

  return sortedEvents;
}
