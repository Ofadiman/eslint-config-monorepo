import { Module } from '@nestjs/common'

import { ConfigurationModule } from './configuration/configuration.module'
import { DatabaseModule } from './database/database.module'
import { HealthModule } from './health/health.module'
import { CryptoService } from './shared/services/crypto/crypto.service'

@Module({
  exports: [CryptoService],
  imports: [ConfigurationModule, DatabaseModule, HealthModule],
  providers: [CryptoService]
})
export class CoreModule {}
