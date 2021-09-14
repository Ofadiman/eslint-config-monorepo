import { validateObject } from './validate-object'
import { _validateObjectSpecUtils as t } from './validate-object.spec.utils'

describe(`validateObject function`, (): void => {
  test(`should validate passed object with default options and return validated class instance`, (): void => {
    const result: InstanceType<typeof t.PassValidationDto> = validateObject({
      dto: t.PassValidationDto,
      exception: t.Exception,
      object: t.objectToValidate
    })

    expect(result).toBeInstanceOf(t.PassValidationDto)
    expect(result.foo).toStrictEqual(t.objectToValidate.foo)
    expect(result.bar).toStrictEqual(t.objectToValidate.bar)
  })

  test(`should validate passed object with custom options and return validated class instance`, (): void => {
    const result: InstanceType<typeof t.PassValidationDto> = validateObject({
      dto: t.PassValidationDto,
      exception: t.Exception,
      object: t.objectToValidateWithExtraneousProperty,
      options: t.customValidatorOptions
    })

    expect(result).toBeInstanceOf(t.PassValidationDto)
    expect(result.foo).toStrictEqual(t.objectToValidate.foo)
    expect(result.bar).toStrictEqual(t.objectToValidate.bar)
  })

  test(`should throw an error when the validation fails`, (): void => {
    let error: unknown

    try {
      validateObject({ dto: t.FailValidationDto, exception: t.Exception, object: t.objectToValidate })
    } catch (error_: unknown) {
      error = error_
    }

    expect(error).toBeInstanceOf(t.Exception)
  })
})
