const { validateObjectValues } = require('../Validate/validateObjectValues');

describe('validateObjectValues', () => {
  test('should not throw error for valid object values', () => {
    const validObject = {
      name: 'John',
      age: 25,
      city: 'New York'
    };
    expect(() => validateObjectValues(validObject)).not.toThrow();
  });

  test('should throw error for object with null value', () => {
    const invalidObject = {
      name: 'John',
      age: null,
      city: 'New York'
    };
    expect(() => validateObjectValues(invalidObject)).toThrow('No pueden haber campos vacios');
  });

  test('should throw error for object with empty string', () => {
    const invalidObject = {
      name: 'John',
      age: '',
      city: 'New York'
    };
    expect(() => validateObjectValues(invalidObject)).toThrow('No pueden haber campos vacios');
  });

  test('should throw custom error message when provided', () => {
    const invalidObject = {
      name: 'John',
      age: null
    };
    const customMessage = 'Custom error message';
    expect(() => validateObjectValues(invalidObject, customMessage)).toThrow(customMessage);
  });

  test('should handle empty object', () => {
    expect(() => validateObjectValues({})).not.toThrow();
  });
});