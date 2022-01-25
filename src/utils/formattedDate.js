var monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const formattedDate = (() => {
  const formatDigits = num => (num < 10 ? '0' + num : '' + num);

  return timestamp => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${formatDigits(monthNames[date.getMonth()])}-${formatDigits(
      date.getDate()
    )}`;
  };
})();

export default formattedDate;
