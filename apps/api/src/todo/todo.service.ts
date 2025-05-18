import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {Todo} from "./entities/todo.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    const todo: Todo = {
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(todo);
  }

  findAll() : Todo[] {
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
