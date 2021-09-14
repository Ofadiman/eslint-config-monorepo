import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { EnvironmentVariable } from './enums/environment-variable.enum'

@Injectable()
export class ConfigurationService {
  public constructor(private readonly configService: ConfigService) {}

  public get<ReturnType extends string>(environmentVariable: EnvironmentVariable): ReturnType {
    return this.configService.get(environmentVariable) as ReturnType
  }
}
