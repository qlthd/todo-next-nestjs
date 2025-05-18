import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const categories = createTodoDto.categories
      ? await this.categoryRepository.findByIds(createTodoDto.categories)
      : [];

    const todo: Todo = {
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      categories: categories,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
