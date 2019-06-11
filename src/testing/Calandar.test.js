import Calandar from '../helpers/Calendar';

describe('Calandar', () => {
  let dateInstance;
  beforeEach(() => {
    jest.clearAllMocks();
    dateInstance = new Calandar();
  });

  it('should generate todays date', () => {
      const day =  dateInstance.getNewDate();
      expect(day.toString()
      ).toMatch(/[1-31]/);
  });
});
