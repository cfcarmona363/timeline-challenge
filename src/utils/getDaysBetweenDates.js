export default function getDaysBeteenDates(date1String, date2String) {
  const date1 = new Date(date1String);
  const date2 = new Date(date2String);

  const differenceInMs = Math.abs(date2 - date1);

  const daysDifference = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24)) + 1;
  return isNaN(daysDifference) ? 0 : daysDifference;
}
