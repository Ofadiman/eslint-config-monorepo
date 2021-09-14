import { Test, TestingModule } from '@nestjs/testing'

import { PostsController } from './posts.controller'

describe(`PostsController`, (): void => {
  let controller: PostsController

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController]
    }).compile()

    controller = module.get<PostsController>(PostsController)
  })

  test(`should be defined`, (): void => {
    expect(controller).toBeDefined()
  })
})
