import commaNumber from './commaNumber';

describe('commaNumber', () => {
  test('commaNumber(100) => "100"', () => {
    expect(commaNumber(100)).toBe('100');
  });
  test('commaNumber(1000) => "1,000"', () => {
    expect(commaNumber(1000)).toBe('1,000');
  });
  test('commaNumber(9999999) => "9,999,999"', () => {
    expect(commaNumber(9999999)).toBe('9,999,999');
  });
  test('commaNumber("1000 10") => "1,000 10"', () => {
    expect(commaNumber('1000 10')).toBe('1,000 10');
  });
});
