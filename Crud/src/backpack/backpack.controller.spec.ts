import { Test, TestingModule } from '@nestjs/testing';
import { BackpackController } from './backpack.controller';

describe('BackpackController', () => {
  let controller: BackpackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackpackController],
    }).compile();

    controller = module.get<BackpackController>(BackpackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
