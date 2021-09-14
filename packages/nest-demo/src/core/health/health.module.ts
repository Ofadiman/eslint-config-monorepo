import { Module } from '@nestjs/common'

import { ConfigurationModule } from '../configuration/configuration.module'
import { HealthController } from './health.controller'

@Module({
  controllers: [HealthController],
  imports: [ConfigurationModule]
})
export class HealthModule {}
