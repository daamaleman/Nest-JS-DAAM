import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Action {
  @PrimaryGeneratedColumn('identity')
  idProductos: number;
  @Column()
  nombre: string;
  @Column()
  precio: number;
  @Column()
  stock: number;
}
