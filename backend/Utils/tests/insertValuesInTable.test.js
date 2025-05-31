const { insertValuesInTable } = require('../Tables/insertValuesInTable');
const { getQuery } = require('../../database/query');

// Mock the database query
jest.mock('../../database/query', () => ({
  getQuery: jest.fn()
}));

describe('insertValuesInTable', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should not execute query for empty rows', async () => {
    await insertValuesInTable('TestTable', []);
    expect(getQuery).not.toHaveBeenCalled();
  });

  test('should insert single row correctly', async () => {
    const correctRows = [{
      data: {
        name: 'John',
        age: 25,
        city: 'New York'
      }
    }];

    await insertValuesInTable('TestTable', correctRows);

    expect(getQuery).toHaveBeenCalledWith(
      "INSERT INTO TestTable (name, age, city) VALUES ('John', 25, 'New York')"
    );
  });

  test('should handle multiple rows within batch size', async () => {
    const correctRows = [
      { data: { name: 'John', age: 25 } },
      { data: { name: 'Jane', age: 30 } }
    ];

    await insertValuesInTable('TestTable', correctRows);

    expect(getQuery).toHaveBeenCalledWith(
      "INSERT INTO TestTable (name, age) VALUES ('John', 25), ('Jane', 30)"
    );
  });

  test('should handle rows exceeding batch size', async () => {
    const correctRows = Array(1500).fill().map((_, index) => ({
      data: { name: `Name${index}`, age: index }
    }));

    await insertValuesInTable('TestTable', correctRows);

    // Should make two calls due to batch size of 1000
    expect(getQuery).toHaveBeenCalledTimes(2);
  });

  test('should handle null values', async () => {
    const correctRows = [{
      data: {
        name: 'John',
        age: null,
        city: 'New York'
      }
    }];

    await insertValuesInTable('TestTable', correctRows);

    expect(getQuery).toHaveBeenCalledWith(
      "INSERT INTO TestTable (name, age, city) VALUES ('John', null, 'New York')"
    );
  });

  test('should handle special characters in string values', async () => {
    const correctRows = [{
      data: {
        name: "O'Connor",
        city: "New York's"
      }
    }];

    await insertValuesInTable('TestTable', correctRows);

    expect(getQuery).toHaveBeenCalledWith(
      "INSERT INTO TestTable (name, city) VALUES ('O''Connor', 'New York''s')"
    );
  });
});