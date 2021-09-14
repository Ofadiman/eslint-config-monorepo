import { ValidationError } from 'class-validator'

import { HttpStatus } from '../enums/http-status.enum'
import { ApplicationException } from './application.exception'

export class ValidationPipeException extends ApplicationException {
  public static identifier: string = `ValidationPipeException`

  public constructor(errors: ValidationError[]) {
    super({
      message: errors.toString(),
      name: ValidationPipeException.identifier,
      statusCode: HttpStatus.BadRequest
    })
  }
}
