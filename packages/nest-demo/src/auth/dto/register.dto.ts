import { PickType } from '@nestjs/swagger'

import { User } from '../../users/user.schema'

export class RegisterBodyDto extends PickType(User, [`name`, `email`, `password`]) {}

export class RegisterResponseDto extends User {}
