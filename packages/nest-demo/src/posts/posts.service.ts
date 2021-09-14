import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { EnforceDocument, Model } from 'mongoose'

import { UsersService } from '../users/users.service'
import { CreateOnePostBodyDto, CreateOnePostResponseDto } from './dto/create-one-post.dto'
import { Post, PostDocument } from './post.schema'

@Injectable()
export class PostsService {
  public constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
    private readonly usersService: UsersService
  ) {}

  public async createOne(createOnePostBodyDto: CreateOnePostBodyDto): Promise<CreateOnePostResponseDto> {
    await this.usersService.readOne({ _id: createOnePostBodyDto.owner })

    const postModel: EnforceDocument<PostDocument, void> = new this.postModel(createOnePostBodyDto)

    return postModel.save()
  }
}
