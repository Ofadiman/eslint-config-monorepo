import { ClassConstructor, plainToClass } from 'class-transformer'
import { validateSync, ValidationError, ValidatorOptions } from 'class-validator'
import { mergeAll } from 'ramda'

import { ValidateObjectArgs } from './validate-object.types'

export const validateObject = <Dto extends ClassConstructor<unknown>, Exception extends ClassConstructor<unknown>>({
  dto,
  object,
  options,
  exception
}: ValidateObjectArgs<Dto, Exception>): InstanceType<Dto> => {
  const defaultOptions: ValidatorOptions = {
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    skipMissingProperties: false,
    skipNullProperties: false,
    skipUndefinedProperties: false,
    whitelist: true
  }
  const overrideOptions: ValidateObjectArgs<Dto, Exception>['options'] = options ?? {}
  const finalOptions: ValidatorOptions = mergeAll([defaultOptions, overrideOptions])

  const instanceToValidate: InstanceType<Dto> = plainToClass(dto, object) as InstanceType<Dto>
  const errors: ValidationError[] = validateSync(instanceToValidate as Record<string, unknown>, finalOptions)

  const hasErrors: boolean = errors.length > 0
  if (hasErrors) {
    throw new exception(errors)
  }

  return instanceToValidate
}
