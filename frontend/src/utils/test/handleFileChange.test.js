import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { handleFileChange } from '../handleFileChange';
import { handleInputChange } from '../handleInputChange';
import { handleNotifications } from '../handleNotifications';

// Mock dependencies
jest.mock('../handleInputChange');
jest.mock('../handleNotifications');

describe('handleFileChange', () => {
  let setState;
  let extensions;

  beforeEach(() => {
    jest.clearAllMocks();
    setState = jest.fn();
    extensions = ['.xlsx'];
  });

  test('should handle valid file extension', () => {
    const file = new File(['dummy content'], 'test.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const event = { target: { files: [file], value: null } };
    handleFileChange(event, extensions, setState);
    expect(handleInputChange).toHaveBeenCalledWith('files', event.target.files, setState);
    expect(handleNotifications).not.toHaveBeenCalled();
  });

  test('should handle multiple valid files', () => {
    const file1 = new File(['dummy content'], 'test1.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const file2 = new File(['dummy content'], 'test2.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const event = { target: { files: [file1, file2], value: null } };
    handleFileChange(event, extensions, setState);
    expect(handleInputChange).toHaveBeenCalledWith('files', event.target.files, setState);
    expect(handleNotifications).not.toHaveBeenCalled();
  });

  test('should handle invalid file extension', () => {
    const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
    const event = { target: { files: [file], value: null } };
    handleFileChange(event, extensions, setState);
    expect(handleInputChange).toHaveBeenCalledWith('files', null, setState);
    expect(handleNotifications).toHaveBeenCalledWith('error', 'Por favor, seleccione un archivo .xlsx válido. test.txt');
    expect(event.target.value).toBeNull();
  });

  test('should handle no files selected', () => {
    const event = { target: { files: [], value: null } };
    handleFileChange(event, extensions, setState);
    expect(handleNotifications).toHaveBeenCalledWith('error', 'Por favor, seleccione un archivo');
  });

  test('should handle mixed valid and invalid files', () => {
    const file1 = new File(['dummy content'], 'test1.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const file2 = new File(['dummy content'], 'test2.txt', { type: 'text/plain' });
    const event = { target: { files: [file1, file2], value: null } };
    handleFileChange(event, extensions, setState);
    expect(handleInputChange).toHaveBeenCalledWith('files', null, setState);
    expect(handleNotifications).toHaveBeenCalledWith('error', 'Por favor, seleccione un archivo .xlsx válido. test2.txt');
    expect(event.target.value).toBeNull();
  });
}); 