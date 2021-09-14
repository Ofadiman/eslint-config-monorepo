import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { validateObject } from '../shared/functions/validate-object/validate-object'
import { EnvironmentVariablesDto } from './configuration.dto'
import { ConfigurationService } from './configuration.service'
import { InvalidEnvironmentException } from './exceptions/invalid-environment.exception'

@Module({
  exports: [ConfigurationService],
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: `.env.${process.env.NODE_ENV as string}`,
      isGlobal: true,
      validate: (config: Record<string, unknown>): EnvironmentVariablesDto => {
        return validateObject({
          dto: EnvironmentVariablesDto,
          exception: InvalidEnvironmentException,
          object: config,
          options: { forbidNonWhitelisted: false, forbidUnknownValues: false, whitelist: false }
        })
      },
      validationOptions: {
        abortEarly: false,
        allowUnknown: false
      }
    })
  ],
  providers: [ConfigurationService, ConfigService]
})
export class ConfigurationModule {}
