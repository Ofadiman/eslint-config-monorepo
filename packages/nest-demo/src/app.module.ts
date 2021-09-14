import { Module, ValidationPipe } from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'
import { ValidationError } from 'class-validator'

import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module'
import { ValidationPipeException } from './core/shared/exceptions/validation-pipe.exception'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule, PostsModule, CoreModule, AuthModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        disableErrorMessages: true,
        exceptionFactory: (errors: ValidationError[]): ValidationPipeException => {
          return new ValidationPipeException(errors)
        },
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transform: true,
        validationError: {
          target: false,
          value: true
        }
      })
    }
  ]
})
export class AppModule {}
