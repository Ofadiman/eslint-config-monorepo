import { ClassConstructor } from 'class-transformer'
import { ValidatorOptions } from 'class-validator'

export type ValidateObjectArgs<Dto extends ClassConstructor<unknown>, Exception extends ClassConstructor<unknown>> = {
  dto: Dto
  exception: Exception
  object: Record<string, unknown>
  options?: ValidatorOptions
}
