import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import mongoose from 'mongoose'

import { BaseSchema } from '../core/database/types/base-schema.type'
import { User } from '../users/user.schema'

export type PostDocument = mongoose.Document & Post

@Schema({ versionKey: false })
export class Post implements BaseSchema {
  @ApiProperty({
    description: `Title of the post.`
  })
  @Prop({ required: true, type: String })
  public title: string

  @ApiProperty({
    description: `Content of the post.`
  })
  @Prop({ required: true, type: String })
  public content: string

  @ApiProperty({
    description: `A date when the post was created.`
  })
  @Prop({ type: Date })
  public createdAt: Date

  @ApiProperty({
    description: `A date when the post was last time updated.`
  })
  @Prop({ type: Date })
  public updatedAt: Date

  @ApiProperty({
    description: `Id of the post owner.`,
    type: String
  })
  @Prop({ ref: User.name, required: true, type: mongoose.Schema.Types.ObjectId })
  public owner: User
}

export const PostSchema: mongoose.Schema<PostDocument> = SchemaFactory.createForClass(Post)
