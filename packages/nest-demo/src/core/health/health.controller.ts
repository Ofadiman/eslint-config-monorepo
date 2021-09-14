import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ConfigurationService } from '../configuration/configuration.service'
import { EnvironmentVariable } from '../configuration/enums/environment-variable.enum'
import { GetStatusResponseDto } from './dto/get-status.dto'

@ApiTags(`health`)
@Controller(`health`)
export class HealthController {
  public constructor(private readonly configurationService: ConfigurationService) {}

  @Get(`status`)
  public getStatus(): GetStatusResponseDto {
    return {
      environment: this.configurationService.get(EnvironmentVariable.NodeEnv),
      status: `up`
    }
  }
}
