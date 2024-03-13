export default function getPositionBetweenDates(
  startDateStr,
  endDateStr,
  targetDateStr
) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const targetDate = new Date(targetDateStr);

  const totalDuration = endDate - startDate;

  const durationFromStart = targetDate - startDate;

  const position = durationFromStart / totalDuration;

  return position;
}
