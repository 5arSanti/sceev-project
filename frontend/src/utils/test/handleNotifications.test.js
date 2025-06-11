import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { handleNotifications } from '../handleNotifications';
import { toast } from 'react-toastify';

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn(),
    error: jest.fn(),
    success: jest.fn()
  }
}));

describe('handleNotifications', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show info notification with custom message', () => {
    handleNotifications('info', 'Custom info message');
    expect(toast.info).toHaveBeenCalledWith('Custom info message', { position: 'bottom-right' });
  });

  test('should show info notification with default message', () => {
    handleNotifications('info');
    expect(toast.info).toHaveBeenCalledWith('Información', { position: 'bottom-right' });
  });

  test('should show error notification with custom message', () => {
    handleNotifications('error', 'Custom error message');
    expect(toast.error).toHaveBeenCalledWith('Custom error message', { position: 'bottom-right' });
  });

  test('should show error notification with default message', () => {
    handleNotifications('error');
    expect(toast.error).toHaveBeenCalledWith('Error', { position: 'bottom-right' });
  });

  test('should show success notification with custom message', () => {
    handleNotifications('success', 'Custom success message');
    expect(toast.success).toHaveBeenCalledWith('Custom success message', { position: 'bottom-right' });
  });

  test('should show success notification with default message', () => {
    handleNotifications('success');
    expect(toast.success).toHaveBeenCalledWith('Completado Exitosamente', { position: 'bottom-right' });
  });

  test('should default to info type when invalid type is provided', () => {
    handleNotifications('invalid');
    expect(toast.info).toHaveBeenCalledWith('Información', { position: 'bottom-right' });
  });
}); 