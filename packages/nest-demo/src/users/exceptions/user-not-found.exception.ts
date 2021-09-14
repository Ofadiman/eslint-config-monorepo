import { HttpStatus } from '../../core/shared/enums/http-status.enum'
import { ApplicationException } from '../../core/shared/exceptions/application.exception'

type UserNotFoundExceptionArgs = {
  id: string
}

export class UserNotFoundException extends ApplicationException {
  public static Identifier: string = `UserNotFoundException`

  public constructor(args: UserNotFoundExceptionArgs) {
    super({
      message: `User with id ${args.id} not found!`,
      name: UserNotFoundException.Identifier,
      statusCode: HttpStatus.NotFound
    })
  }
}
