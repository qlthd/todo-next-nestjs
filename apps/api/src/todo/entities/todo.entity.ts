import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column({ default: false })
  @ApiProperty()
  completed: boolean;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @Column({ nullable: true })
  @ApiProperty({ required: false, type: Date, nullable: true })
  completedAt?: Date;

  @ManyToMany(() => Category, (category) => category.todos, { cascade: true })
  @JoinTable()
  @ApiProperty({ type: () => [Category] })
  categories: Category[];
}
