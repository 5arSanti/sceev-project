import { describe, expect, test, jest, beforeEach, afterEach } from '@jest/globals';
import { 
  generateYearRange, 
  getMonthsUntilCurrent, 
  obtenerFechaActual,
  months
} from '../dateFunctions';
import { handleNotifications } from '../handleNotifications';

// Mock handleNotifications
jest.mock('../handleNotifications');

// Mock the date functions
jest.mock('../dateFunctions', () => {
  const originalModule = jest.requireActual('../dateFunctions');
  return {
    ...originalModule,
    getCurrentDate: jest.fn()
  };
});

describe('dateFunctions', () => {
  let RealDate;

  beforeEach(() => {
    jest.clearAllMocks();
    RealDate = Date;
    const mockDate = new Date('2024-01-15T12:00:00Z');
    globalThis.Date = class extends Date {
      constructor(...args) {
        if (args.length) {
          return new RealDate(...args);
        }
        return mockDate;
      }
      static now() {
        return mockDate.getTime();
      }
    };
    // Set up the mock date for getCurrentDate
    const { getCurrentDate } = jest.requireMock('../dateFunctions');
    getCurrentDate.mockReturnValue(mockDate);
  });

  afterEach(() => {
    globalThis.Date = RealDate;
  });

  describe('generateYearRange', () => {
    test('should generate array of years in reverse order', () => {
      const result = generateYearRange(2020, 2024);
      expect(result).toEqual([2024, 2023, 2022, 2021, 2020]);
    });

    test('should handle single year range', () => {
      const result = generateYearRange(2024, 2024);
      expect(result).toEqual([2024]);
    });

    test('should handle invalid range', () => {
      const result = generateYearRange(2024, 2020);
      expect(result).toEqual([]);
    });
  });

  describe('getMonthsUntilCurrent', () => {
    test('should return months until current month for current year', () => {
      const result = getMonthsUntilCurrent(2024);
      expect(result).toEqual({
        1: 'Enero'
      });
    });

    test('should return all months for past year', () => {
      const result = getMonthsUntilCurrent(2023);
      expect(result).toEqual(months);
    });

    test('should show error for future year', () => {
      getMonthsUntilCurrent(2025);
      expect(handleNotifications).toHaveBeenCalledWith('error', 'Error configurando meses');
    });
  });

  describe('obtenerFechaActual', () => {
    test('should return formatted current date in Spanish', () => {
      const result = obtenerFechaActual();
      expect(result).toBe('Lunes, 15 de enero de 2024');
    });
  });

  describe('months object', () => {
    test('should contain all months in Spanish', () => {
      expect(months).toEqual({
        1: 'Enero',
        2: 'Febrero',
        3: 'Marzo',
        4: 'Abril',
        5: 'Mayo',
        6: 'Junio',
        7: 'Julio',
        8: 'Agosto',
        9: 'Septiembre',
        10: 'Octubre',
        11: 'Noviembre',
        12: 'Diciembre'
      });
    });
  });
}); 