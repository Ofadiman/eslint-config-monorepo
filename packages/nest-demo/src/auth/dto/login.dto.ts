import { OmitType, PickType } from '@nestjs/swagger'

import { User } from '../../users/user.schema'

export class LoginBodyDto extends PickType(User, [`email`, `password`]) {}

export class LoginResponseDto extends OmitType(User, [`password`]) {}
