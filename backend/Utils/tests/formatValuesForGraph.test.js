const { formatValuesForGraph } = require('../Graphs/formatValuesForGraph');

describe('formatValuesForGraph', () => {
  test('should format simple object correctly', () => {
    const input = {
      'Label1': 10,
      'Label2': 20,
      'Label3': 30
    };

    const result = formatValuesForGraph(input);

    expect(result).toEqual({
      data: [10, 20, 30],
      dataLabels: ['Label1', 'Label2', 'Label3'],
      datasetLabel: ['Ofertas de empleo']
    });
  });

  test('should handle empty object', () => {
    const input = {};

    const result = formatValuesForGraph(input);

    expect(result).toEqual({
      data: [],
      dataLabels: [],
      datasetLabel: ['Ofertas de empleo']
    });
  });

  test('should handle object with string values', () => {
    const input = {
      'Label1': 'Value1',
      'Label2': 'Value2'
    };

    const result = formatValuesForGraph(input);

    expect(result).toEqual({
      data: ['Value1', 'Value2'],
      dataLabels: ['Label1', 'Label2'],
      datasetLabel: ['Ofertas de empleo']
    });
  });

  test('should handle object with mixed value types', () => {
    const input = {
      'Label1': 10,
      'Label2': 'Value2',
      'Label3': true
    };

    const result = formatValuesForGraph(input);

    expect(result).toEqual({
      data: [10, 'Value2', true],
      dataLabels: ['Label1', 'Label2', 'Label3'],
      datasetLabel: ['Ofertas de empleo']
    });
  });
});