const { getColumnNames } = require('../getColumnNames');
const { getQuery } = require('../../database/query');

// Mock the database query
jest.mock('../../database/query', () => ({
  getQuery: jest.fn()
}));

describe('getColumnNames', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should return column names excluding specified values', async () => {
    const mockColumns = [
      { column_name: 'ID_Disciplina' },
      { column_name: 'ID_Municipio' },
      { column_name: 'Nombre' },
      { column_name: 'Descripcion' }
    ];

    getQuery.mockResolvedValue(mockColumns);

    const result = await getColumnNames('TestTable', ['ID_Disciplina', 'ID_Municipio']);

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('TestTable'));
    expect(result).toEqual(['Nombre', 'Descripcion']);
  });

  test('should return all columns for Ofertas_Empleo_Desglosado table', async () => {
    const mockColumns = [
      { column_name: 'ID_Disciplina' },
      { column_name: 'ID_Municipio' },
      { column_name: 'Nombre' }
    ];

    getQuery.mockResolvedValue(mockColumns);

    const result = await getColumnNames('Ofertas_Empleo_Desglosado');

    expect(getQuery).toHaveBeenCalledWith(expect.stringContaining('Ofertas_Empleo_Desglosado'));
    expect(result).toEqual(['ID_Disciplina', 'ID_Municipio', 'Nombre']);
  });

  test('should handle empty result set', async () => {
    getQuery.mockResolvedValue([]);

    const result = await getColumnNames('EmptyTable');

    expect(result).toEqual([]);
  });
});