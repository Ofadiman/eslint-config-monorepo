import { IsMongoId } from 'class-validator'

export class DeleteOneUserParamDto {
  @IsMongoId()
  public id: string
}
