import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { CategoriesModule } from './categories/categories.module';
import { Todo } from './todo/entities/todo.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: '',
      entities: [Todo, Category],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    TodoModule,
    CategoriesModule,
  ],
  providers: [],
})
export class AppModule {}
