import Calandar from '../helpers/Calendar';

describe('test Calandar class', () => {
  let dateInstance;
  beforeEach(() => {
    jest.clearAllMocks();
    dateInstance = new Calandar();
  });

  it('should generate  a date value', () => {
    const day = dateInstance._getNewDate();
    expect(day.toString()).toMatch(/[1-31]/);
  });

  it('should return back a day name based on the date', () => {
    const expected = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const dayName = dateInstance.getDayName();
    expect(expected).toContain(dayName);
  });

  it('should get the month name based on todays date', () => {
    const expected = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthName = dateInstance._getMonthName();
    expect(expected).toContain(monthName);
  });

  it('should get back the year name correctly', () => {
    const year = dateInstance._getYear();
    expect(year.toString()).toMatch(/\d{4}/);
  });

  describe('test for dfferent calandar value', () => {
    it('should  generate in a named format when a new date value is passed in ', () => {
      // 2019 - 06 - 11;
      dateInstance.setNewDate('2019-06-11');
      expect(dateInstance.generateDate()).toBe('Tuesday , 11 June 2019');
    });
  });
});
