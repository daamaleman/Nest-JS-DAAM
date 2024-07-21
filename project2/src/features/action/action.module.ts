import { Module } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { Action } from './entities/action.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Action]),
  ], //De l8 a L10, Siempre se agrega
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
