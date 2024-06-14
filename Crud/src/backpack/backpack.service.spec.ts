import { Test, TestingModule } from '@nestjs/testing';
import { BackpackService } from './backpack.service';

describe('BackpackService', () => {
  let service: BackpackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackpackService],
    }).compile();

    service = module.get<BackpackService>(BackpackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
