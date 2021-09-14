import { Module, OnModuleInit } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface'
import mongoose from 'mongoose'

import { ConfigurationModule } from '../configuration/configuration.module'
import { ConfigurationService } from '../configuration/configuration.service'
import { EnvironmentVariable } from '../configuration/enums/environment-variable.enum'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configurationService: ConfigurationService): MongooseModuleOptions => {
        const database: string = configurationService.get(EnvironmentVariable.MongoDatabase)
        const host: string = configurationService.get(EnvironmentVariable.MongoHost)
        const password: string = configurationService.get(EnvironmentVariable.MongoRootPassword)
        const port: string = configurationService.get(EnvironmentVariable.MongoPort)
        const username: string = configurationService.get(EnvironmentVariable.MongoRootUsername)

        return {
          uri: `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`
        }
      }
    })
  ]
})
export class DatabaseModule implements OnModuleInit {
  // eslint-disable-next-line class-methods-use-this
  public onModuleInit(): void {
    mongoose.set(`setDefaultsOnInsert`, true)
  }
}
