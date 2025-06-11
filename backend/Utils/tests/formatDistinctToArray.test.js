const { formatDistinctToArray } = require('../formatDistincToArray');
const { getQuery } = require('../../database/query');

// Mock the database query
jest.mock('../../database/query', () => ({
  getQuery: jest.fn()
}));

describe('formatDistinctToArray', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should return array of distinct values', async () => {
    const mockValues = [
      { value: 'Value1' },
      { value: 'Value2' },
      { value: 'Value3' }
    ];

    getQuery.mockResolvedValue(mockValues);

    const result = await formatDistinctToArray('columnName', 'TestTable');

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('SELECT DISTINCT columnName'));
    expect(result).toEqual(['Value1', 'Value2', 'Value3']);
  });

  test('should filter out null values', async () => {
    const mockValues = [
      { value: 'Value1' },
      { value: null },
      { value: 'Value3' }
    ];

    getQuery.mockResolvedValue(mockValues);

    const result = await formatDistinctToArray('columnName');

    expect(result).toEqual(['Value1', 'Value3']);
  });

  test('should use default table name when not specified', async () => {
    const mockValues = [{ value: 'Value1' }];
    getQuery.mockResolvedValue(mockValues);

    await formatDistinctToArray('columnName');

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('Ofertas_empleo_completo'));
  });

  test('should handle empty result set', async () => {
    getQuery.mockResolvedValue([]);

    const result = await formatDistinctToArray('columnName');

    expect(result).toEqual([]);
  });
});