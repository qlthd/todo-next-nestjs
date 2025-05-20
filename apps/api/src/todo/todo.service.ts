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
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const categories = createTodoDto.categories
        ? await this.categoryRepository.findByIds(createTodoDto.categories)
        : [];

      const todo: Todo = this.todoRepository.create({
        id: uuidv4(),
        title: createTodoDto.title,
        description: createTodoDto.description,
        categories: categories,
        completed: false,
        createdAt: new Date(),
      });
      return await this.todoRepository.save(todo);
    } catch (error) {
      console.error('Error creating todo:', error);
      throw new Error('Failed to create todo');
    }
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: string) {
    return this.todoRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
