const { formatToQuery } = require('../formatToQuery');

describe('formatToQuery', () => {
  test('should format query object to SQL WHERE clause', () => {
    const query = {
      name: 'John',
      age: '25',
      city: 'New York'
    };
    const except = ['age'];

    const result = formatToQuery(query, except);

    expect(result).toBe("name = 'John' AND city = 'New York'");
  });

  test('should filter out null and empty string values', () => {
    const query = {
      name: 'John',
      age: null,
      city: '',
      country: 'USA'
    };
    const except = [];

    const result = formatToQuery(query, except);

    expect(result).toBe("name = 'John' AND country = 'USA'");
  });

  test('should return empty string for empty query object', () => {
    const query = {};
    const except = [];

    const result = formatToQuery(query, except);

    expect(result).toBe('');
  });

  test('should handle query with all excluded fields', () => {
    const query = {
      name: 'John',
      age: '25'
    };
    const except = ['name', 'age'];

    const result = formatToQuery(query, except);

    expect(result).toBe('');
  });

  test('should handle special characters in values', () => {
    const query = {
      name: "O'Connor",
      city: "New York's"
    };
    const except = [];

    const result = formatToQuery(query, except);

    expect(result).toBe("name = 'O'Connor' AND city = 'New York's'");
  });
});