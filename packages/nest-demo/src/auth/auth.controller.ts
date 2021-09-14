import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'
import { LoginBodyDto, LoginResponseDto } from './dto/login.dto'
import { RegisterBodyDto, RegisterResponseDto } from './dto/register.dto'

@ApiTags(`auth`)
@Controller(`auth`)
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post(`register`)
  public async register(@Body() registerBodyDto: RegisterBodyDto): Promise<RegisterResponseDto> {
    return this.authService.register(registerBodyDto)
  }

  @Post(`login`)
  public async login(@Body() loginBodyDto: LoginBodyDto): Promise<LoginResponseDto> {
    return this.authService.login(loginBodyDto)
  }
}
