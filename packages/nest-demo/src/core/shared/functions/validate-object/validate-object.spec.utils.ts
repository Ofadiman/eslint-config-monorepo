import { IsInt, IsString, ValidatorOptions } from 'class-validator'

const objectToValidate: Record<string, unknown> = {
  bar: 1,
  foo: `foo`
}

const objectToValidateWithExtraneousProperty: Record<string, unknown> = {
  ...objectToValidate,
  extraneousProperty: `extraneousProperty`
}

const customValidatorOptions: ValidatorOptions = {
  forbidNonWhitelisted: false,
  forbidUnknownValues: false,
  whitelist: false
}

class PassValidationDto {
  @IsString()
  public foo: string

  @IsInt()
  public bar: number
}

class FailValidationDto {
  @IsInt()
  public bar: number
}

class Exception {
  public name: string = `Exception`
}

// eslint-disable-next-line @typescript-eslint/typedef
export const _validateObjectSpecUtils = {
  Exception,
  FailValidationDto,
  PassValidationDto,
  customValidatorOptions,
  objectToValidate,
  objectToValidateWithExtraneousProperty
}
