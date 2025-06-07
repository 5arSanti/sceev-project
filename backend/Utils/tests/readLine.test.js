const { readLine } = require('../files/readLine');
const { insertInDatabase } = require('../insertInDatabase');

// Mock dependencies
jest.mock('../insertInDatabase');

describe('readLine', () => {
  let mockRl;
  let lineCallback;
  let closeCallback;
  let errorCallback;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Setup mock readline interface
    mockRl = {
      on: jest.fn((event, callback) => {
        if (event === 'line') lineCallback = callback;
        if (event === 'close') closeCallback = callback;
        if (event === 'error') errorCallback = callback;
      })
    };
  });

  test('should process lines and return correct counts', async () => {
    const columns = ['column1', 'column2'];
    const lines = [
      'value1|$$|value2',
      'value3|$$|value4',
      'value5|$$|value6'
    ];

    insertInDatabase
      .mockResolvedValueOnce('added')
      .mockResolvedValueOnce('duplicate')
      .mockResolvedValueOnce('error');

    const promise = readLine(mockRl, columns);

    // Simulate line events
    for (const line of lines) {
      await lineCallback(line);
    }

    // Simulate close event
    await closeCallback();

    const result = await promise;

    expect(result).toEqual({
      addedRows: 1,
      duplicateRows: 1,
      errorRows: 1
    });
  });

  test('should handle line processing error', async () => {
    const columns = ['column1', 'column2'];
    const lines = ['invalid|line'];

    insertInDatabase.mockRejectedValue(new Error('Database error'));

    const promise = readLine(mockRl, columns);

    // Simulate line event
    await lineCallback(lines[0]);

    // Simulate close event
    await closeCallback();

    const result = await promise;

    expect(result).toEqual({
      addedRows: 0,
      duplicateRows: 0,
      errorRows: 1
    });
  });

  test('should handle readline error', async () => {
    const columns = ['column1', 'column2'];
    const error = new Error('Readline error');

    const promise = readLine(mockRl, columns);

    // Simulate error event
    errorCallback(error);

    await expect(promise).rejects.toThrow(error);
  });

  test('should handle empty file', async () => {
    const columns = ['column1', 'column2'];

    const promise = readLine(mockRl, columns);

    // Simulate close event without any lines
    await closeCallback();

    const result = await promise;

    expect(result).toEqual({
      addedRows: 0,
      duplicateRows: 0,
      errorRows: 0
    });
  });
});