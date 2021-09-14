/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common'
import bcrypt from 'bcrypt'

import { CompareHashArgs, HashArgs } from './crypto.service.types'

@Injectable()
export class CryptoService {
  public static HashRounds: number = 12

  public async hash(args: HashArgs): Promise<string> {
    return bcrypt.hash(args.value, CryptoService.HashRounds)
  }

  public async compareHash(args: CompareHashArgs): Promise<boolean> {
    return bcrypt.compare(args.value, args.hash)
  }
}
