import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from '../users/users.module'
import { Post, PostSchema } from './post.schema'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'

@Module({
  controllers: [PostsController],
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]), UsersModule],
  providers: [PostsService]
})
export class PostsModule {}
