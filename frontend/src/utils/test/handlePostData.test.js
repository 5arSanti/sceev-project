import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { handlePostData, handlePostFile } from '../handleData/handlePostData';
import { handleNotifications } from '../handleNotifications';
import { reloadLocation } from '../realoadLocation';

// Mock dependencies
jest.mock('../handleNotifications');
jest.mock('../realoadLocation');
jest.mock('../api', () => ({
  api: 'http://test-api.com'
}));

describe('handlePostData', () => {
  let mockEvent;
  let mockObject;
  let mockEndpoint;
  let mockCallback;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEvent = { preventDefault: jest.fn() };
    mockObject = { test: 'data' };
    mockEndpoint = '/test';
    mockCallback = jest.fn();
    globalThis.fetch = jest.fn();
  });

  test('should handle successful POST request', async () => {
    const mockResponse = {
      Status: 'Success',
      message: 'Test successful'
    };
    globalThis.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    const result = await handlePostData(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'http://test-api.com/test',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(mockObject)
      })
    );
    expect(handleNotifications).toHaveBeenCalledWith('success', mockResponse.message);
    expect(mockCallback).toHaveBeenCalled();
    expect(result).toBe('Success');
  });

  test('should handle failed POST request', async () => {
    const mockResponse = {
      Status: 'Error',
      Error: 'Test error'
    };
    globalThis.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    await handlePostData(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(handleNotifications).toHaveBeenCalledWith('error', mockResponse.Error);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should handle network error', async () => {
    const mockError = new Error('Network error');
    globalThis.fetch.mockRejectedValueOnce(mockError);

    await handlePostData(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(handleNotifications).toHaveBeenCalledWith('error', mockError);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should use default callback if not provided', async () => {
    const mockResponse = {
      Status: 'Success',
      message: 'Test successful'
    };
    globalThis.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    await handlePostData(mockEvent, mockObject, mockEndpoint);

    expect(reloadLocation).toHaveBeenCalled();
  });
});

describe('handlePostFile', () => {
  let mockEvent;
  let mockObject;
  let mockEndpoint;
  let mockCallback;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEvent = { preventDefault: jest.fn() };
    mockObject = new FormData();
    mockEndpoint = '/test';
    mockCallback = jest.fn();
    globalThis.fetch = jest.fn();
  });

  test('should handle successful file upload', async () => {
    const mockResponse = {
      Status: 'Success',
      message: 'File uploaded successfully'
    };
    globalThis.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    await handlePostFile(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'http://test-api.com/test',
      expect.objectContaining({
        method: 'POST',
        body: mockObject
      })
    );
    expect(handleNotifications).toHaveBeenCalledWith('success', mockResponse.message);
    expect(mockCallback).toHaveBeenCalledWith(mockResponse);
  });

  test('should handle failed file upload', async () => {
    const mockResponse = {
      Status: 'Error',
      Error: 'Upload failed'
    };
    globalThis.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    await handlePostFile(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(handleNotifications).toHaveBeenCalledWith('error', mockResponse.Error);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should handle network error during file upload', async () => {
    const mockError = new Error('Network error');
    globalThis.fetch.mockRejectedValueOnce(mockError);

    await handlePostFile(mockEvent, mockObject, mockEndpoint, mockCallback);

    expect(handleNotifications).toHaveBeenCalledWith('error', mockError);
    expect(mockCallback).not.toHaveBeenCalled();
  });
}); 