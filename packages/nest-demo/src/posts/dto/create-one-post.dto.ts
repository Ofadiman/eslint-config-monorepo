import { IsMongoId, IsString, MaxLength } from 'class-validator'

import { Post } from '../post.schema'

export class CreateOnePostBodyDto {
  @IsMongoId()
  public owner: string

  @IsString()
  @MaxLength(128)
  public title: string

  @IsString()
  @MaxLength(1_024)
  public content: string
}

export class CreateOnePostResponseDto extends Post {}
