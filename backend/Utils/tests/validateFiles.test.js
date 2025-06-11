const { validateFiles, validateFile, validateFileOption, validateFileExtension } = require('../Validate/validateFiles');

describe('validateFiles', () => {
  describe('validateFile', () => {
    test('should not throw error for valid file', () => {
      const validFile = ['file.csv'];
      expect(() => validateFile(validFile)).not.toThrow();
    });

    test('should throw error for null file', () => {
      expect(() => validateFile(null)).toThrow('Por favor, seleccione un archivo');
    });

    test('should throw error for empty file array', () => {
      expect(() => validateFile([])).toThrow('Por favor, seleccione un archivo');
    });
  });

  describe('validateFileOption', () => {
    test('should not throw error for valid option', () => {
      expect(() => validateFileOption('option1')).not.toThrow();
    });

    test('should throw error for null option', () => {
      expect(() => validateFileOption(null)).toThrow('Por favor, seleccione el lugar de publicación.');
    });

    test('should throw error for empty string option', () => {
      expect(() => validateFileOption('')).toThrow('Por favor, seleccione el lugar de publicación.');
    });
  });

  describe('validateFileExtension', () => {
    test('should not throw error for csv file', () => {
      const csvFile = { filename: 'file.csv' };
      expect(() => validateFileExtension(csvFile)).not.toThrow();
    });

    test('should throw error for non-csv file', () => {
      const nonCsvFile = { filename: 'file.txt' };
      expect(() => validateFileExtension(nonCsvFile)).toThrow('Por favor, cargue un archivo csv, no un archivo txt.');
    });
  });

  describe('validateFiles (main function)', () => {
    test('should not throw error for valid inputs', () => {
      const validFile = ['file.csv'];
      const validOption = 'option1';
      const validSecondOption = 'option2';
      expect(() => validateFiles(validFile, validOption, validSecondOption)).not.toThrow();
    });

    test('should throw error for invalid file', () => {
      const invalidFile = null;
      const validOption = 'option1';
      const validSecondOption = 'option2';
      expect(() => validateFiles(invalidFile, validOption, validSecondOption))
        .toThrow('Por favor, seleccione un archivo');
    });

    test('should throw error for invalid option', () => {
      const validFile = ['file.csv'];
      const invalidOption = null;
      const validSecondOption = 'option2';
      expect(() => validateFiles(validFile, invalidOption, validSecondOption))
        .toThrow('Por favor, seleccione el lugar de publicación.');
    });

    test('should throw error for invalid second option', () => {
      const validFile = ['file.csv'];
      const validOption = 'option1';
      const invalidSecondOption = null;
      expect(() => validateFiles(validFile, validOption, invalidSecondOption))
        .toThrow('Por favor, seleccione el lugar de publicación.');
    });
  });
});