const { formatGraphValues } = require('../Graphs/formatGraphValues');
const { getQuery } = require('../../database/query');
const { formatDistinctToArray } = require('../formatDistincToArray');

// Mock the dependencies
jest.mock('../../database/query', () => ({
  getQuery: jest.fn()
}));

jest.mock('../formatDistincToArray', () => ({
  formatDistinctToArray: jest.fn()
}));

describe('formatGraphValues', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should format graph values correctly', async () => {
    const column = 'testColumn';
    const conditions = 'testCondition';
    const distinctValues = ['Value1', 'Value2', 'Value3'];

    formatDistinctToArray.mockResolvedValue(distinctValues);
    getQuery
      .mockResolvedValueOnce([{ '': 10 }])
      .mockResolvedValueOnce([{ '': 20 }])
      .mockResolvedValueOnce([{ '': 30 }]);

    const result = await formatGraphValues(column, conditions);

    expect(formatDistinctToArray).toHaveBeenCalledWith(column, 'Ofertas_empleo_completo');
    expect(getQuery).toHaveBeenCalledTimes(3);
    expect(result).toEqual({
      'Value1': 10,
      'Value2': 20,
      'Value3': 30
    });
  });

  test('should handle empty distinct values', async () => {
    const column = 'testColumn';
    formatDistinctToArray.mockResolvedValue([]);

    const result = await formatGraphValues(column);

    expect(formatDistinctToArray).toHaveBeenCalledWith(column, 'Ofertas_empleo_completo');
    expect(getQuery).not.toHaveBeenCalled();
    expect(result).toEqual({});
  });

  test('should handle database errors', async () => {
    const column = 'testColumn';
    const distinctValues = ['Value1'];

    formatDistinctToArray.mockResolvedValue(distinctValues);
    getQuery.mockRejectedValue(new Error('Database error'));

    await expect(formatGraphValues(column)).rejects.toThrow('Database error');
  });

  test('should handle null conditions', async () => {
    const column = 'testColumn';
    const distinctValues = ['Value1'];

    formatDistinctToArray.mockResolvedValue(distinctValues);
    getQuery.mockResolvedValue([{ '': 10 }]);

    await formatGraphValues(column, null);

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('WHERE testColumn = \'Value1\''));
  });
});