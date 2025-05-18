import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from '../../todo/entities/todo.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  colorCode: string;

  @ManyToMany(() => Todo, (todo) => todo.categories)
  todos: Todo[];
}
