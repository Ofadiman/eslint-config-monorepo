import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import mongoose, { EnforceDocument, Model } from 'mongoose'

import { CreateOneUserBodyDto, CreateOneUserResponseDto } from './dto/create-one-user.dto'
import { DeleteOneUserParamDto } from './dto/delete-one-user.dto'
import { ReadOneUserParamDto, ReadOneUserResponseDto } from './dto/read-one-user.dto'
import { UpdateOneResponseDto, UpdateOneUserBodyDto, UpdateOneUserParamDto } from './dto/update-one-user.dto'
import { UserNotFoundException } from './exceptions/user-not-found.exception'
import { User, UserDocument } from './user.schema'

@Injectable()
export class UsersService {
  public constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  public async createOne(createOneUserBodyDto: CreateOneUserBodyDto): Promise<CreateOneUserResponseDto> {
    const userModel: EnforceDocument<UserDocument, void> = new this.userModel(createOneUserBodyDto)

    return userModel.save()
  }

  public async readOne(readOneUserParamDto: ReadOneUserParamDto): Promise<ReadOneUserResponseDto> {
    const user: EnforceDocument<UserDocument, void> | null = await this.userModel.findOne(readOneUserParamDto).exec()

    if (user === null) {
      throw new UserNotFoundException({ id: readOneUserParamDto._id ?? `no id` })
    } else {
      return user
    }
  }

  public async updateOne(
    updateOneUserBodyDto: UpdateOneUserBodyDto,
    updateOneUserParamDto: UpdateOneUserParamDto
  ): Promise<UpdateOneResponseDto> {
    const updatedUser: UserDocument | null = await this.userModel
      .findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(updateOneUserParamDto.id) },
        { $set: updateOneUserBodyDto },
        { new: true }
      )
      .exec()

    if (updatedUser === null) {
      throw new UserNotFoundException({ id: updateOneUserParamDto.id })
    } else {
      return updatedUser
    }
  }

  public async deleteOne(deleteOneUserParamDto: DeleteOneUserParamDto): Promise<void> {
    await this.userModel.deleteOne({ _id: deleteOneUserParamDto.id }).exec()
  }
}
