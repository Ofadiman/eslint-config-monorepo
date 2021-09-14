import { PickType } from '@nestjs/swagger'

import { User } from '../user.schema'

export class CreateOneUserBodyDto extends PickType(User, [`email`, `name`, `password`] as const) {}

export class CreateOneUserResponseDto extends User {}
