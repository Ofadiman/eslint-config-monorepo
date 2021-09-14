import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'
import mongoose from 'mongoose'

import { BaseSchema } from '../core/database/types/base-schema.type'

export type UserDocument = mongoose.Document & User

@Schema({ timestamps: true, versionKey: false })
export class User implements BaseSchema {
  @ApiProperty({
    description: `MongoDB id represented as string.`
  })
  public _id: string

  @ApiProperty({
    description: `Name of the user.`,
    maxLength: 512
  })
  @Prop({ required: true, type: String })
  @IsString()
  @MaxLength(512)
  public name: string

  @ApiProperty({
    description: `Email used by the user to register into the application.`,
    maxLength: 512
  })
  @Prop({ required: true, type: String })
  @IsEmail()
  @MaxLength(512)
  public email: string

  @ApiProperty({
    description: `Hash of the password supplied by user during registration process.`,
    maxLength: 64,
    minLength: 8
  })
  @Prop({ required: true, type: String })
  @IsString()
  @MaxLength(64)
  @MinLength(8)
  public password: string

  @ApiProperty({
    description: `A date when the user was created.`,
    type: Date
  })
  @Prop({ type: Date })
  public createdAt: Date

  @ApiProperty({
    description: `A date when the user was last time updated.`,
    type: Date
  })
  @Prop({ type: Date })
  public updatedAt: Date
}

export const UserSchema: mongoose.Schema<UserDocument> = SchemaFactory.createForClass(User)
