const { transformQueryParams } = require('../transformQueryParams');

describe('transformQueryParams', () => {
  test('should transform string "null" to null value', () => {
    const query = {
      name: 'John',
      age: 'null',
      city: 'New York'
    };

    const result = transformQueryParams(query);

    expect(result).toEqual({
      name: 'John',
      age: null,
      city: 'New York'
    });
  });

  test('should handle empty object', () => {
    const query = {};

    const result = transformQueryParams(query);

    expect(result).toEqual({});
  });

  test('should handle object with no null values', () => {
    const query = {
      name: 'John',
      age: '25',
      city: 'New York'
    };

    const result = transformQueryParams(query);

    expect(result).toEqual({
      name: 'John',
      age: '25',
      city: 'New York'
    });
  });

  test('should handle object with multiple null values', () => {
    const query = {
      name: 'null',
      age: 'null',
      city: 'New York'
    };

    const result = transformQueryParams(query);

    expect(result).toEqual({
      name: null,
      age: null,
      city: 'New York'
    });
  });
});