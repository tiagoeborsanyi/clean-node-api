import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('CompareFields Validation', () => {
  test('should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'any_name2' })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('should not return if validation success', () => {
    const sut = makeSut()
    const success = sut.validate({ field: 'any_name', fieldToCompare: 'any_name' })
    expect(success).toBeFalsy()
  })
})
