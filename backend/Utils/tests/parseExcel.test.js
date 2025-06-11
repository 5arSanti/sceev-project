const { parseExcel } = require('../files/parseExcel');
const xlsx = require('xlsx');

// Mock xlsx module
jest.mock('xlsx', () => ({
  readFile: jest.fn(),
  utils: {
    sheet_to_json: jest.fn()
  }
}));

describe('parseExcel', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should parse valid Excel file correctly', async () => {
    const filePath = 'test.xlsx';
    const columns = ['name', 'age', 'city'];
    const mockRows = [
      { name: 'John', age: 25, city: 'New York' },
      { name: 'Jane', age: 30, city: 'London' }
    ];

    xlsx.readFile.mockReturnValue({
      SheetNames: ['Sheet1'],
      Sheets: { Sheet1: {} }
    });
    xlsx.utils.sheet_to_json.mockReturnValue(mockRows);

    const result = await parseExcel(filePath, columns);

    expect(result).toEqual({
      totalRows: 2,
      correctRows: [
        { data: mockRows[0], index: 1 },
        { data: mockRows[1], index: 2 }
      ],
      incorrectRows: [],
      error: []
    });
  });

  test('should handle empty Excel file', async () => {
    const filePath = 'empty.xlsx';
    const columns = ['name', 'age'];

    xlsx.readFile.mockReturnValue({
      SheetNames: ['Sheet1'],
      Sheets: { Sheet1: {} }
    });
    xlsx.utils.sheet_to_json.mockReturnValue([]);

    await expect(parseExcel(filePath, columns))
      .rejects.toThrow('El archivo Excel está vacío.');
  });

  test('should handle missing required columns', async () => {
    const filePath = 'missing_columns.xlsx';
    const columns = ['name', 'age', 'city'];
    const mockRows = [
      { name: 'John', age: 25 }
    ];

    xlsx.readFile.mockReturnValue({
      SheetNames: ['Sheet1'],
      Sheets: { Sheet1: {} }
    });
    xlsx.utils.sheet_to_json.mockReturnValue(mockRows);

    await expect(parseExcel(filePath, columns))
      .rejects.toThrow('El archivo Excel no contiene las columnas obligatorias: city, ¿cargó el archivo correcto?');
  });

  test('should separate correct and incorrect rows', async () => {
    const filePath = 'mixed.xlsx';
    const columns = ['name', 'age', 'city'];
    const mockRows = [
      { name: 'John', age: 25, city: 'New York' },
      { name: 'Jane', age: null, city: 'London' },
      { name: 'Bob', age: 35, city: null }
    ];

    xlsx.readFile.mockReturnValue({
      SheetNames: ['Sheet1'],
      Sheets: { Sheet1: {} }
    });
    xlsx.utils.sheet_to_json.mockReturnValue(mockRows);

    const result = await parseExcel(filePath, columns);

    expect(result).toEqual({
      totalRows: 3,
      correctRows: [
        { data: mockRows[0], index: 1 }
      ],
      incorrectRows: [
        { data: mockRows[1], index: 2 },
        { data: mockRows[2], index: 3 }
      ],
      error: []
    });
  });

  test('should handle file read error', async () => {
    const filePath = 'error.xlsx';
    const columns = ['name', 'age'];

    xlsx.readFile.mockImplementation(() => {
      throw new Error('File not found');
    });

    await expect(parseExcel(filePath, columns))
      .rejects.toThrow('File not found');
  });
});