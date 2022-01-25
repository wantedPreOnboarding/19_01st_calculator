export default function commaNumber(num) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return num;
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}