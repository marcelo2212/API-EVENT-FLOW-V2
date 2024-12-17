import { Module } from '@nestjs/common';
import { LostAndFoundObjController } from './lost-and-found-obj.controller';
import { LostAndFoundObjService } from './lost-and-found-obj.service';

@Module({
  controllers: [LostAndFoundObjController],
  providers: [LostAndFoundObjService]
})
export class LostAndFoundObjModule {}
