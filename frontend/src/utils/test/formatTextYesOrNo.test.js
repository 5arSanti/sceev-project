import { describe, expect, test } from '@jest/globals';
import { formatTextYearOrNo } from '../Format/formatTextYesOrNo';

describe('formatTextYesOrNo', () => {
  test('should return "Si" for value 1', () => {
    expect(formatTextYearOrNo(1)).toBe('Si');
  });

  test('should return "No" for value 0', () => {
    expect(formatTextYearOrNo(0)).toBe('No');
  });

  test('should return undefined for other values', () => {
    expect(formatTextYearOrNo(2)).toBeUndefined();
    expect(formatTextYearOrNo(-1)).toBeUndefined();
    expect(formatTextYearOrNo(null)).toBeUndefined();
    expect(formatTextYearOrNo(undefined)).toBeUndefined();
  });
}); 