import { describe, expect, test, jest } from '@jest/globals';
import { handleInputChange } from '../handleInputChange';

describe('handleInputChange', () => {
  test('should convert numeric string to number', () => {
    const setState = jest.fn();
    handleInputChange('count', '123', setState);
    expect(setState).toHaveBeenCalledWith(expect.any(Function));
    
    // Call the function passed to setState with a mock previous state
    const updateFn = setState.mock.calls[0][0];
    const result = updateFn({ count: 0 });
    expect(result).toEqual({ count: 123 });
  });

  test('should keep non-numeric string as is', () => {
    const setState = jest.fn();
    handleInputChange('name', 'John Doe', setState);
    expect(setState).toHaveBeenCalledWith(expect.any(Function));
    
    const updateFn = setState.mock.calls[0][0];
    const result = updateFn({ name: '' });
    expect(result).toEqual({ name: 'John Doe' });
  });

  test('should handle empty string', () => {
    const setState = jest.fn();
    handleInputChange('value', '', setState);
    expect(setState).toHaveBeenCalledWith(expect.any(Function));
    
    const updateFn = setState.mock.calls[0][0];
    const result = updateFn({ value: 'previous' });
    expect(result).toEqual({ value: '' });
  });

  test('should handle whitespace-only string', () => {
    const setState = jest.fn();
    handleInputChange('value', '   ', setState);
    expect(setState).toHaveBeenCalledWith(expect.any(Function));
    
    const updateFn = setState.mock.calls[0][0];
    const result = updateFn({ value: 'previous' });
    expect(result).toEqual({ value: '   ' });
  });

  test('should preserve other state values', () => {
    const setState = jest.fn();
    handleInputChange('age', '25', setState);
    expect(setState).toHaveBeenCalledWith(expect.any(Function));
    
    const updateFn = setState.mock.calls[0][0];
    const result = updateFn({ age: 0, name: 'John', active: true });
    expect(result).toEqual({ age: 25, name: 'John', active: true });
  });
}); 