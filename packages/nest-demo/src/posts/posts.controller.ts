import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateOnePostBodyDto, CreateOnePostResponseDto } from './dto/create-one-post.dto'
import { PostsService } from './posts.service'

@ApiTags(`posts`)
@Controller(`posts`)
export class PostsController {
  public constructor(private readonly postsService: PostsService) {}

  @Post()
  public async createOne(@Body() createOnePostBodyDto: CreateOnePostBodyDto): Promise<CreateOnePostResponseDto> {
    return this.postsService.createOne(createOnePostBodyDto)
  }
}
