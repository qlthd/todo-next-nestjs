import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Todo} from "./todo/entities/todo.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoModule} from "./todo/todo.module";
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // don't use in prod !!
    }),
    TodoModule,
    CategoriesModule,
  ],
  providers: [],
})
export class AppModule {}
