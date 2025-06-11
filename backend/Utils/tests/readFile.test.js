const { readFile } = require('../files/readFile');
const { getColumnNames } = require('../getColumnNames');
const { readLine } = require('../files/readLine');
const { deleteFile } = require('../files/deleteFile');
const fs = require('fs');
const readline = require('readline');

// Mock dependencies
jest.mock('../getColumnNames');
jest.mock('../files/readLine');
jest.mock('../files/deleteFile');
jest.mock('fs');
jest.mock('readline');

describe('readFile', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should process file successfully', async () => {
    const mockColumns = ['column1', 'column2'];
    const mockFile = { path: 'test.csv' };
    const mockLog = { added: 10, duplicate: 2, error: 0 };
    const mockReadStream = { pipe: jest.fn() };
    const mockReadlineInterface = { on: jest.fn() };

    getColumnNames.mockResolvedValue(mockColumns);
    fs.createReadStream.mockReturnValue(mockReadStream);
    readline.createInterface.mockReturnValue(mockReadlineInterface);
    readLine.mockResolvedValue(mockLog);
    deleteFile.mockResolvedValue();

    const result = await readFile(mockFile);

    expect(getColumnNames).toHaveBeenCalled();
    expect(fs.createReadStream).toHaveBeenCalledWith(mockFile.path);
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: mockReadStream,
      crlfDelay: Infinity
    });
    expect(readLine).toHaveBeenCalledWith(mockReadlineInterface, mockColumns);
    expect(deleteFile).toHaveBeenCalledWith(mockFile.path);
    expect(result).toEqual(mockLog);
  });

  test('should handle getColumnNames error', async () => {
    const mockFile = { path: 'test.csv' };
    const error = new Error('Failed to get columns');

    getColumnNames.mockRejectedValue(error);

    await expect(readFile(mockFile)).rejects.toThrow('Failed to get columns');
    expect(fs.createReadStream).not.toHaveBeenCalled();
    expect(readLine).not.toHaveBeenCalled();
    expect(deleteFile).not.toHaveBeenCalled();
  });

  test('should handle readLine error', async () => {
    const mockColumns = ['column1', 'column2'];
    const mockFile = { path: 'test.csv' };
    const error = new Error('Failed to read line');
    const mockReadStream = { pipe: jest.fn() };
    const mockReadlineInterface = { on: jest.fn() };

    getColumnNames.mockResolvedValue(mockColumns);
    fs.createReadStream.mockReturnValue(mockReadStream);
    readline.createInterface.mockReturnValue(mockReadlineInterface);
    readLine.mockRejectedValue(error);

    await expect(readFile(mockFile)).rejects.toThrow('Failed to read line');
    expect(fs.createReadStream).toHaveBeenCalledWith(mockFile.path);
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: mockReadStream,
      crlfDelay: Infinity
    });
    expect(readLine).toHaveBeenCalledWith(mockReadlineInterface, mockColumns);
  });

  test('should handle deleteFile error', async () => {
    const mockColumns = ['column1', 'column2'];
    const mockFile = { path: 'test.csv' };
    const mockLog = { added: 10, duplicate: 2, error: 0 };
    const error = new Error('Failed to delete file');
    const mockReadStream = { pipe: jest.fn() };
    const mockReadlineInterface = { on: jest.fn() };

    getColumnNames.mockResolvedValue(mockColumns);
    fs.createReadStream.mockReturnValue(mockReadStream);
    readline.createInterface.mockReturnValue(mockReadlineInterface);
    readLine.mockResolvedValue(mockLog);
    deleteFile.mockRejectedValue(error);

    await expect(readFile(mockFile)).rejects.toThrow('Failed to delete file');
  });
});