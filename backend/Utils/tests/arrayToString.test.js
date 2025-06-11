const { arrayToString } = require('../arrayToString');

describe('arrayToString', () => {
  test('should convert array of objects with index property to comma-separated string', () => {
    const input = [
      { index: 1 },
      { index: 2 },
      { index: 3 }
    ];

    const result = arrayToString(input);

    expect(result).toBe('1, 2, 3');
  });

  test('should return empty string for empty array', () => {
    const input = [];

    const result = arrayToString(input);

    expect(result).toBe('');
  });

  test('should handle single item array', () => {
    const input = [{ index: 1 }];

    const result = arrayToString(input);

    expect(result).toBe('1');
  });

  test('should handle array with non-numeric indices', () => {
    const input = [
      { index: 'a' },
      { index: 'b' },
      { index: 'c' }
    ];

    const result = arrayToString(input);

    expect(result).toBe('a, b, c');
  });
});