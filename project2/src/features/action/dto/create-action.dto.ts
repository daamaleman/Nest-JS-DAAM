import { ApiProperty } from '@nestjs/swagger';
import { isIn, IsInt, IsString } from 'class-validator';

export class CreateActionDto {
  @ApiProperty() //Siempre tiene que ir
  @IsInt() //Declaracion de datos
  idProductos: number;
  @ApiProperty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsInt()
  precio: number;
  @ApiProperty()
  @IsInt()
  stock: number;
}
