const { getValuesByTable } = require('../Filters/getValuesByTable');
const { getQuery } = require('../../database/query');

// Mock the database query
jest.mock('../../database/query', () => ({
  getQuery: jest.fn()
}));

describe('getValuesByTable', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should get values from multiple tables', async () => {
    const columns = ['Table1', 'Table2'];
    const mockResults = {
      Table1: [
        { Nombre: 'Value1' },
        { Nombre: 'Value2' }
      ],
      Table2: [
        { Nombre: 'Value3' },
        { Nombre: 'Value4' }
      ]
    };

    getQuery
      .mockResolvedValueOnce(mockResults.Table1)
      .mockResolvedValueOnce(mockResults.Table2);

    const result = await getValuesByTable(columns);

    expect(getQuery).toHaveBeenCalledTimes(2);
    expect(result).toEqual({
      Table1: ['Value1', 'Value2'],
      Table2: ['Value3', 'Value4']
    });
  });

  test('should handle empty columns array', async () => {
    const columns = [];

    const result = await getValuesByTable(columns);

    expect(getQuery).not.toHaveBeenCalled();
    expect(result).toEqual({});
  });

  test('should handle empty table results', async () => {
    const columns = ['Table1'];
    getQuery.mockResolvedValue([]);

    const result = await getValuesByTable(columns);

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('SELECT Nombre FROM Table1'));
    expect(result).toEqual({
      Table1: []
    });
  });

  test('should handle database errors', async () => {
    const columns = ['Table1'];
    getQuery.mockRejectedValue(new Error('Database error'));

    await expect(getValuesByTable(columns)).rejects.toThrow('Database error');
  });
});