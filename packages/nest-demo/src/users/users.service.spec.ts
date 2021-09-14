import { Test, TestingModule } from '@nestjs/testing'

import { UsersService } from './users.service'

describe(`UsersService`, (): void => {
  let usersService: UsersService

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService]
    }).compile()

    usersService = module.get<UsersService>(UsersService)
  })

  test(`should be defined`, (): void => {
    expect(usersService).toBeDefined()
  })
})
