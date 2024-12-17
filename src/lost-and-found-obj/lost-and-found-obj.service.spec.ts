import { Test, TestingModule } from '@nestjs/testing';
import { LostAndFoundObjService } from './lost-and-found-obj.service';

describe('LostAndFoundObjService', () => {
  let service: LostAndFoundObjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LostAndFoundObjService],
    }).compile();

    service = module.get<LostAndFoundObjService>(LostAndFoundObjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
