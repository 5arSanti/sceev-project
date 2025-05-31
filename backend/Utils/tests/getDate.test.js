const { getDate } = require('../getDate');
const moment = require('moment');

// Mock moment to return a fixed date
jest.mock('moment', () => {
  const mockMoment = jest.fn(() => ({
    format: jest.fn().mockReturnValue('01/01/2024 12:00:00')
  }));
  return mockMoment;
});

describe('getDate', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should return formatted date string', () => {
    const result = getDate();

    expect(moment).toHaveBeenCalled();
    expect(result).toBe('01/01/2024 12:00:00');
  });

  test('should use correct date format', () => {
    const mockMomentInstance = {
      format: jest.fn().mockReturnValue('01/01/2024 12:00:00')
    };
    moment.mockReturnValue(mockMomentInstance);

    getDate();

    expect(mockMomentInstance.format).toHaveBeenCalledWith('DD/MM/YYYY hh:mm:ss');
  });
});