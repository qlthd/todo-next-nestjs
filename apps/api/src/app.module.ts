import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Todo} from "./todo/entities/todo.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoModule} from "./todo/todo.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Todo],
      synchronize: true, // don't use in prod !!
    }),
    TodoModule,
  ],
})
export class AppModule {}
