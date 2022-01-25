import formattedDate from './formattedDate';

describe('formattedDate test', () => {
  test('formattedDate(new Date("2021/07/24")); => 2021-Jul-24', () => {
    expect(formattedDate(new Date('2021/07/24'))).toBe('2021-Jul-24');
  });
  test('formattedDate(new Date("2021/12/24")); => 2021-Dec-24', () => {
    expect(formattedDate(new Date('2021/12/24'))).toBe('2021-Dec-24');
  });
  test('formattedDate(new Date(1643098263000)); => 2022-Jan-25', () => {
    expect(formattedDate(1643098263000)).toBe('2022-Jan-25');
  });
});
