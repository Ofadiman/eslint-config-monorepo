import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ConfigurationModule } from '../core/configuration/configuration.module'
import { User, UserSchema } from './user.schema'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), ConfigurationModule],
  providers: [UsersService]
})
export class UsersModule {}
