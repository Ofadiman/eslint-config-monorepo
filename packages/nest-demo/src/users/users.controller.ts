import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateOneUserBodyDto, CreateOneUserResponseDto } from './dto/create-one-user.dto'
import { DeleteOneUserParamDto } from './dto/delete-one-user.dto'
import { ReadOneUserParamDto, ReadOneUserResponseDto } from './dto/read-one-user.dto'
import { UpdateOneResponseDto, UpdateOneUserBodyDto, UpdateOneUserParamDto } from './dto/update-one-user.dto'
import { UsersService } from './users.service'

@ApiTags(`users`)
@Controller(`users`)
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public async createOne(@Body() createOneUserBodyDto: CreateOneUserBodyDto): Promise<CreateOneUserResponseDto> {
    return this.usersService.createOne(createOneUserBodyDto)
  }

  @Get(`:id`)
  public async readOne(@Param() readOneUserParamDto: ReadOneUserParamDto): Promise<ReadOneUserResponseDto> {
    return this.usersService.readOne(readOneUserParamDto)
  }

  @Patch(`:id`)
  public async updateOne(
    @Body() updateOneUserBodyDto: UpdateOneUserBodyDto,
    @Param() updateOneUserParamDto: UpdateOneUserParamDto
  ): Promise<UpdateOneResponseDto> {
    return this.usersService.updateOne(updateOneUserBodyDto, updateOneUserParamDto)
  }

  @Delete(`:id`)
  public async deleteOne(@Param() deleteOneUserParamDto: DeleteOneUserParamDto): Promise<unknown> {
    return this.usersService.deleteOne(deleteOneUserParamDto)
  }
}
