import { HttpException } from '@nestjs/common'

import { HttpStatus } from '../enums/http-status.enum'

export type ApplicationExceptionArgs = {
  message: string
  meta?: Record<string, unknown>
  name: string
  statusCode: HttpStatus
}

/**
 * Base exception class used by the application. It should not be used to throw any exceptions.
 * All application exceptions should extend `ApplicationException` class to provide unified way of handling exceptions.
 */
export class ApplicationException extends HttpException {
  public static identifier: string = `ApplicationException`

  public constructor(args: ApplicationExceptionArgs) {
    super(
      {
        message: args.message,
        meta: args.meta ?? {},
        name: args.name,
        statusCode: Number(args.statusCode)
      },
      Number(args.statusCode)
    )
  }
}
