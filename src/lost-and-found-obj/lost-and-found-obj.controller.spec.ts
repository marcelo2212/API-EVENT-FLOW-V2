import { Test, TestingModule } from '@nestjs/testing';
import { LostAndFoundObjController } from './lost-and-found-obj.controller';

describe('LostAndFoundObjController', () => {
  let controller: LostAndFoundObjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LostAndFoundObjController],
    }).compile();

    controller = module.get<LostAndFoundObjController>(LostAndFoundObjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
