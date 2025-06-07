const { readFolder } = require('../files/readFolder');
const fs = require('fs');

// Mock fs module
jest.mock('fs');

describe('readFolder', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should read folder contents successfully', async () => {
    const mockFiles = ['file1.csv', 'file2.csv', 'file3.csv'];
    fs.readdir.mockImplementation((path, callback) => {
      callback(null, mockFiles);
    });

    const result = await readFolder();

    expect(fs.readdir).toHaveBeenCalledWith('uploads/', expect.any(Function));
    expect(result).toEqual(mockFiles);
  });

  test('should read subfolder contents successfully', async () => {
    const mockFiles = ['file1.csv', 'file2.csv'];
    const subfolder = 'subfolder';
    fs.readdir.mockImplementation((path, callback) => {
      callback(null, mockFiles);
    });

    const result = await readFolder(subfolder);

    expect(fs.readdir).toHaveBeenCalledWith('uploads/subfolder', expect.any(Function));
    expect(result).toEqual(mockFiles);
  });

  test('should handle readdir error', async () => {
    const error = new Error('Folder not found');
    fs.readdir.mockImplementation((path, callback) => {
      callback(error);
    });

    await expect(readFolder()).rejects.toThrow(error);
  });

  test('should handle empty folder', async () => {
    fs.readdir.mockImplementation((path, callback) => {
      callback(null, []);
    });

    const result = await readFolder();

    expect(result).toEqual([]);
  });
});