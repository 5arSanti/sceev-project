const { normalizePort } = require('../Normalize/normalizePort');

describe('normalizePort', () => {
  test('should return number for valid port number', () => {
    expect(normalizePort('3000')).toBe(3000);
  });

  test('should return original value for non-numeric string', () => {
    expect(normalizePort('abc')).toBe('abc');
  });

  test('should return false for negative port number', () => {
    expect(normalizePort('-3000')).toBe(false);
  });

  test('should handle zero port number', () => {
    expect(normalizePort('0')).toBe(0);
  });

  test('should handle numeric input', () => {
    expect(normalizePort(3000)).toBe(3000);
  });

  test('should handle undefined input', () => {
    expect(normalizePort(undefined)).toBe(undefined);
  });
});