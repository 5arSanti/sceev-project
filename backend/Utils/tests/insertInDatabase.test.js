const { insertInDatabase } = require('../insertInDatabase');
const { postQuery, getQuery } = require('../../database/query');

// Mock the database queries
jest.mock('../../database/query', () => ({
  postQuery: jest.fn(),
  getQuery: jest.fn()
}));

describe('insertInDatabase', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should insert new record successfully', async () => {
    const values = ['value1', 'value2', 'value3'];
    const columns = ['column1', 'column2', 'column3'];

    getQuery.mockResolvedValue([{ count: 0 }]);
    postQuery.mockResolvedValue();

    const result = await insertInDatabase(values, columns);

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('SELECT COUNT(*)'));
    expect(postQuery).toHaveBeenCalledWith(
      expect.stringContaining('INSERT INTO Ofertas_Empleo_Desglosado'),
      values
    );
    expect(result).toBe('added');
  });

  test('should handle duplicate record', async () => {
    const values = ['value1', 'value2', 'value3'];
    const columns = ['column1', 'column2', 'column3'];

    getQuery.mockResolvedValue([{ count: 1 }]);

    const result = await insertInDatabase(values, columns);

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('SELECT COUNT(*)'));
    expect(postQuery).not.toHaveBeenCalled();
    expect(result).toBe('duplicate');
  });

  test('should pad values array with null if shorter than columns', async () => {
    const values = ['value1', 'value2'];
    const columns = ['column1', 'column2', 'column3', 'column4'];

    getQuery.mockResolvedValue([{ count: 0 }]);
    postQuery.mockResolvedValue();

    const result = await insertInDatabase(values, columns);

    expect(postQuery).toHaveBeenCalledWith(
      expect.any(String),
      ['value1', 'value2', null, null]
    );
    expect(result).toBe('added');
  });

  test('should handle database error', async () => {
    const values = ['value1', 'value2'];
    const columns = ['column1', 'column2'];

    getQuery.mockRejectedValue(new Error('Database error'));

    const result = await insertInDatabase(values, columns);

    expect(result).toBe('error');
  });
});