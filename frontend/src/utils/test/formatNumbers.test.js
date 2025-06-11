import { describe, expect, test } from '@jest/globals';
import { formatNumbers } from '../formatNumbers';

describe('formatNumbers', () => {
  test('should format integer with thousands separator', () => {
    expect(formatNumbers(1000)).toBe('1.000');
    expect(formatNumbers(1000000)).toBe('1.000.000');
    expect(formatNumbers(1234567)).toBe('1.234.567');
  });

  test('should return empty string for non-integer values', () => {
    expect(formatNumbers(1.5)).toBe('');
    expect(formatNumbers('1.5')).toBe('');
    expect(formatNumbers(null)).toBe('');
    expect(formatNumbers(undefined)).toBe('');
  });

  test('should handle single digit numbers', () => {
    expect(formatNumbers(1)).toBe('1');
    expect(formatNumbers(9)).toBe('9');
  });

  test('should handle numbers less than 1000', () => {
    expect(formatNumbers(100)).toBe('100');
    expect(formatNumbers(999)).toBe('999');
  });

  test('should handle zero', () => {
    expect(formatNumbers(0)).toBe('0');
  });

  test('should handle negative numbers', () => {
    expect(formatNumbers(-1000)).toBe('-1.000');
    expect(formatNumbers(-1234567)).toBe('-1.234.567');
  });
}); 