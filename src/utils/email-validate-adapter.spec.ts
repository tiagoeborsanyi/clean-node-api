import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidate Adapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@email')
    expect(isValid).toBe(false)
  })
})
