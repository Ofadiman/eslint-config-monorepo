import { HttpStatus } from '../../core/shared/enums/http-status.enum'
import { ApplicationException } from '../../core/shared/exceptions/application.exception'

export class InvalidPasswordException extends ApplicationException {
  public static Identifier: string = `InvalidPasswordException`

  public constructor() {
    super({
      message: `Incorrect password`,
      name: InvalidPasswordException.Identifier,
      statusCode: HttpStatus.Unauthorized
    })
  }
}
