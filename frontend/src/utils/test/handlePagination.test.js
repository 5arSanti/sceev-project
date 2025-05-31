import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { handlePagination } from '../handlePagination';
import { handleInputChange } from '../handleInputChange';

// Mock dependencies
jest.mock('../handleInputChange');

describe('handlePagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should go to first page when type is home', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    handlePagination('home', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 1, setState);
  });

  test('should go to previous page when type is back', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    handlePagination('back', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 2, setState);
  });

  test('should not go below page 1 when type is back', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 1;

    handlePagination('back', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 1, setState);
  });

  test('should go to next page when type is next', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    handlePagination('next', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 4, setState);
  });

  test('should not exceed total pages when type is next', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 5;

    handlePagination('next', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 5, setState);
  });

  test('should go to last page when type is last', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    handlePagination('last', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 5, setState);
  });

  test('should default to home when type is invalid', () => {
    const setState = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    handlePagination('invalid', setState, totalPages, currentPage);

    expect(handleInputChange).toHaveBeenCalledWith('Page', 1, setState);
  });
}); 