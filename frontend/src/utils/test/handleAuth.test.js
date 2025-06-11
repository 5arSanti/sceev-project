import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { handleAuthRequest } from '../HandleAuth/handleAuthRequest';
import { handleAdmin } from '../HandleAuth/handleAdmin';
import { handleNotifications } from '../handleNotifications';
import axios from 'axios';

// Mock dependencies
jest.mock('../handleNotifications');
jest.mock('../api', () => ({
  api: 'http://test-api.com'
}));
jest.mock('axios');

describe('handleAuthRequest', () => {
  let mockContext;
  let mockNavigate;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContext = {
      setUser: jest.fn(),
      setAuth: jest.fn()
    };
    mockNavigate = jest.fn();
  });

  test('should set auth and user on successful response', async () => {
    const mockUser = { id: 1, name: 'Test User' };
    const mockResponse = {
      data: {
        Status: 'Success',
        user: mockUser
      }
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    await handleAuthRequest(mockContext, mockNavigate);

    expect(axios.get).toHaveBeenCalledWith('http://test-api.com/auth/');
    expect(mockContext.setAuth).toHaveBeenCalledWith(true);
    expect(mockContext.setUser).toHaveBeenCalledWith(mockUser);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should set auth to false on unsuccessful response', async () => {
    const mockResponse = {
      data: {
        Status: 'Error'
      }
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    await handleAuthRequest(mockContext, mockNavigate);

    expect(mockContext.setAuth).toHaveBeenCalledWith(false);
    expect(mockContext.setUser).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should handle error and navigate to home', async () => {
    const mockError = new Error('Network error');
    axios.get.mockRejectedValueOnce(mockError);

    await handleAuthRequest(mockContext, mockNavigate);

    expect(mockContext.setAuth).toHaveBeenCalledWith(false);
    expect(handleNotifications).toHaveBeenCalledWith('error', mockError.message);
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });
});

describe('handleAdmin', () => {
  let mockSetAdmin;

  beforeEach(() => {
    mockSetAdmin = jest.fn();
  });

  test('should set admin to true for admin user', () => {
    const adminUser = { ID_Tipo_Usuarios: 1 };
    handleAdmin(adminUser, mockSetAdmin);
    expect(mockSetAdmin).toHaveBeenCalledWith(true);
  });

  test('should set admin to false for non-admin user', () => {
    const regularUser = { ID_Tipo_Usuarios: 2 };
    handleAdmin(regularUser, mockSetAdmin);
    expect(mockSetAdmin).toHaveBeenCalledWith(false);
  });

  test('should set admin to false for user without ID_Tipo_Usuarios', () => {
    const userWithoutType = { name: 'Test User' };
    handleAdmin(userWithoutType, mockSetAdmin);
    expect(mockSetAdmin).toHaveBeenCalledWith(false);
  });
}); 