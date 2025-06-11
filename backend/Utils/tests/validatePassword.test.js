const { validatePassword } = require('../Validate/validatePassword');

describe('validatePassword', () => {
  test('should not throw error for valid password', () => {
    expect(() => validatePassword('password123', 'password123')).not.toThrow();
  });

  test('should throw error for password less than 8 characters', () => {
    expect(() => validatePassword('pass', 'pass')).toThrow('La contraseña debe contener al menos 8 caracteres');
  });

  test('should throw error for non-matching passwords', () => {
    expect(() => validatePassword('password123', 'password456')).toThrow('Las contraseñas no coinciden');
  });

  test('should handle numeric inputs', () => {
    expect(() => validatePassword(12345678, 12345678)).not.toThrow();
  });

  test('should handle mixed type inputs', () => {
    expect(() => validatePassword('password123', 12345678)).toThrow('Las contraseñas no coinciden');
  });
});