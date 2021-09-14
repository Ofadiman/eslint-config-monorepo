import { ValidationError } from 'class-validator'

export class InvalidEnvironmentException extends Error {
  public name: string = `InvalidEnvironmentException`

  public constructor(errors: ValidationError[]) {
    super(
      `\n${errors
        .flatMap((error: ValidationError): string[] => {
          return Object.values(error.constraints ?? {})
        })
        .join(`,\n`)}`
    )
  }
}
