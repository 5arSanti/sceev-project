import { describe, expect, test } from '@jest/globals';
import { validateObjectValues } from '../validate/validateObjectValues';

describe('validateObjectValues', () => {
  test('should not throw error for valid object values', () => {
    const validObject = {
      name: 'John',
      age: 30,
      email: 'john@example.com'
    };
    expect(() => validateObjectValues(validObject)).not.toThrow();
  });

  test('should throw error for object with null value', () => {
    const invalidObject = {
      name: 'John',
      age: null,
      email: 'john@example.com'
    };
    expect(() => validateObjectValues(invalidObject)).toThrow('No pueden haber campos vacios');
  });

  test('should throw error for object with empty string', () => {
    const invalidObject = {
      name: 'John',
      age: 30,
      email: ''
    };
    expect(() => validateObjectValues(invalidObject)).toThrow('No pueden haber campos vacios');
  });

  test('should throw custom error message when provided', () => {
    const invalidObject = {
      name: 'John',
      age: null,
      email: 'john@example.com'
    };
    const customMessage = 'Custom error message';
    expect(() => validateObjectValues(invalidObject, customMessage)).toThrow(customMessage);
  });
}); 