import { PartialType } from '@nestjs/swagger'

import { User } from '../user.schema'

export class ReadOneUserParamDto extends PartialType(User) {}

export class ReadOneUserResponseDto extends User {}
