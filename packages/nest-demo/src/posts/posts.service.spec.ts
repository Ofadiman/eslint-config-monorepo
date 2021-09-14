import { Test, TestingModule } from '@nestjs/testing'

import { PostsService } from './posts.service'

describe(`PostsService`, (): void => {
  let service: PostsService

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService]
    }).compile()

    service = module.get<PostsService>(PostsService)
  })

  test(`should be defined`, (): void => {
    expect(service).toBeDefined()
  })
})
