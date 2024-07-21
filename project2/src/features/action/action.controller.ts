import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos') //Nombre del swagger
@Controller('productos') //Nombre del controlador

@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @ApiOperation({summary: 'Titulo', description: 'Descripcion'}) //Titulo y descripcion

  @Post()
  async create(@Body() createActionDto: CreateActionDto) { //Siempre agregar Async
    return await this.actionService.create(createActionDto); //Siempre agregar await
  } //La linea "this..." tiene que ir, se crea conforme la accion

  @Get()
  async findAll() {
    return await this.actionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.actionService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActionDto: UpdateActionDto) {
    return await this.actionService.update(+id, updateActionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.actionService.remove(+id);
  }
}
