import { Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from './entities/action.entity';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action)
    private readonly repository: Repository<Action>,
  ) {}
  
  create(createActionDto: CreateActionDto) {
    return this.repository.save(createActionDto);
  }

  findAll() {
    return this.repository.find;
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where:{ //Comparativa
        idProductos: id
      }
    });
  }

  async update(id: number, updateActionDto: UpdateActionDto) {
    return await this.repository.update(id, updateActionDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
