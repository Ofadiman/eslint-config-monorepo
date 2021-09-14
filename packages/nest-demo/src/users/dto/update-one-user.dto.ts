import { IsInt, IsMongoId, IsOptional, IsString, Max, MaxLength } from 'class-validator'

import { User } from '../user.schema'

export class UpdateOneUserParamDto {
  @IsMongoId()
  public id: string
}

export class UpdateOneUserBodyDto {
  @IsString()
  @MaxLength(512)
  @IsOptional()
  public name?: string

  @IsInt()
  @Max(100)
  @IsOptional()
  public age?: number
}

export class UpdateOneResponseDto extends User {}
