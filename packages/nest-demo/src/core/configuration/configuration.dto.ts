import { IsEnum, IsNumberString, IsString } from 'class-validator'

import { NodeEnv } from '../shared/enums/node-env.enum'
import { EnvironmentVariable } from './enums/environment-variable.enum'

export class EnvironmentVariablesDto {
  @IsNumberString()
  public [EnvironmentVariable.ServerPort]: string

  @IsEnum(NodeEnv)
  public [EnvironmentVariable.NodeEnv]: NodeEnv

  @IsString()
  public [EnvironmentVariable.MongoDatabase]: string

  @IsString()
  public [EnvironmentVariable.MongoRootUsername]: string

  @IsString()
  public [EnvironmentVariable.MongoRootPassword]: string

  @IsString()
  public [EnvironmentVariable.MongoHost]: string

  @IsNumberString({ no_symbols: true })
  public [EnvironmentVariable.MongoPort]: string
}
