import { describe, expect, test, beforeEach, afterEach, jest } from '@jest/globals';
import { scrollToValue } from '../scrollToValue';

describe('scrollToValue', () => {
  beforeEach(() => {
    // Mock document.documentElement.scrollTo
    document.documentElement.scrollTo = jest.fn();
    // Mock setTimeout
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should scroll to specified coordinates', () => {
    scrollToValue(100, 200);
    
    // Fast-forward timers
    jest.runAllTimers();

    expect(document.documentElement.scrollTo).toHaveBeenCalledWith(100, 200);
  });

  test('should use default values when not provided', () => {
    scrollToValue();
    
    // Fast-forward timers
    jest.runAllTimers();

    expect(document.documentElement.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('should respect delay parameter', () => {
    scrollToValue(100, 200, 1000);
    
    // Verify scrollTo hasn't been called yet
    expect(document.documentElement.scrollTo).not.toHaveBeenCalled();
    
    // Fast-forward timers
    jest.advanceTimersByTime(1000);
    
    expect(document.documentElement.scrollTo).toHaveBeenCalledWith(100, 200);
  });
}); 