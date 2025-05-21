import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from '../../todo/entities/todo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  colorCode: string;

  @ManyToMany(() => Todo, (todo) => todo.categories)
  todos: Todo[];
}
