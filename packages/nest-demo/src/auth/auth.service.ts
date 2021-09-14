import { Injectable } from '@nestjs/common'
import { omit } from 'lodash'

import { CryptoService } from '../core/shared/services/crypto/crypto.service'
import { User } from '../users/user.schema'
import { UsersService } from '../users/users.service'
import { LoginBodyDto, LoginResponseDto } from './dto/login.dto'
import { RegisterBodyDto, RegisterResponseDto } from './dto/register.dto'
import { InvalidPasswordException } from './exceptions/invalid-password.exception'

@Injectable()
export class AuthService {
  public constructor(private readonly usersService: UsersService, private readonly cryptoService: CryptoService) {}

  public async register(registerBodyDto: RegisterBodyDto): Promise<RegisterResponseDto> {
    const passwordHash: string = await this.cryptoService.hash({ value: registerBodyDto.password })

    return this.usersService.createOne({ ...registerBodyDto, password: passwordHash })
  }

  public async login(loginBodyDto: LoginBodyDto): Promise<LoginResponseDto> {
    const user: User = await this.usersService.readOne({ email: loginBodyDto.email })

    const isPasswordMatching: boolean = await this.cryptoService.compareHash({
      hash: user.password,
      value: loginBodyDto.password
    })

    if (!isPasswordMatching) {
      throw new InvalidPasswordException()
    }

    return omit(user, [`password`])
  }
}
