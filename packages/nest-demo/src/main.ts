import { NestApplication, NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces'

import { AppModule } from './app.module'
import { ConfigurationService } from './core/configuration/configuration.service'
import { EnvironmentVariable } from './core/configuration/enums/environment-variable.enum'

void (async function bootstrap(): Promise<void> {
  const nestApplication: NestApplication = await NestFactory.create(AppModule, { cors: true })

  const configurationService: ConfigurationService = nestApplication.get(ConfigurationService)

  const swaggerConfig: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle(`Eslint configs swagger.`)
    .setDescription(`Eslint configs API documentation.`)
    .setVersion(`1.0`)
    .addTag(`Eslint configs`)
    .build()
  const document: OpenAPIObject = SwaggerModule.createDocument(nestApplication, swaggerConfig)
  SwaggerModule.setup(`swagger`, nestApplication, document)

  const serverPort: string = configurationService.get(EnvironmentVariable.ServerPort)
  await nestApplication.listen(serverPort)
})()
