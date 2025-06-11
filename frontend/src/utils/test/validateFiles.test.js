import { describe, expect, test } from '@jest/globals';
import { validateFiles } from '../validate/validateFiles';

describe('validateFiles', () => {
  test('should not throw error for valid file and options', () => {
    const file = ['test.xlsx'];
    const option = 'option1';
    const secondOption = 'option2';
    expect(() => validateFiles(file, option, secondOption)).not.toThrow();
  });

  test('should throw error for missing file', () => {
    const file = null;
    const option = 'option1';
    const secondOption = 'option2';
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione un archivo');
  });

  test('should throw error for empty file array', () => {
    const file = [];
    const option = 'option1';
    const secondOption = 'option2';
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione un archivo');
  });

  test('should throw error for missing first option', () => {
    const file = ['test.xlsx'];
    const option = null;
    const secondOption = 'option2';
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione el lugar de publicación.');
  });

  test('should throw error for empty first option', () => {
    const file = ['test.xlsx'];
    const option = '';
    const secondOption = 'option2';
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione el lugar de publicación.');
  });

  test('should throw error for missing second option', () => {
    const file = ['test.xlsx'];
    const option = 'option1';
    const secondOption = null;
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione el lugar de publicación.');
  });

  test('should throw error for empty second option', () => {
    const file = ['test.xlsx'];
    const option = 'option1';
    const secondOption = '';
    expect(() => validateFiles(file, option, secondOption)).toThrow('Por favor, seleccione el lugar de publicación.');
  });
}); 