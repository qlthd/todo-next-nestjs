import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OpenApiNestFactory } from 'nest-openapi-tools';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await OpenApiNestFactory.configure(
    app,
    new DocumentBuilder()
      .setTitle('Todo API')
      .setDescription('A todo API with categories'),
    {
      webServerOptions: {
        enabled: true,
        path: 'api-docs',
      },
      fileGeneratorOptions: {
        enabled: true,
        outputFilePath: './openapi.json',
      },
      clientGeneratorOptions: {
        enabled: true,
        type: 'typescript-fetch',
        outputFolderPath: '../web/api-client/src',
        openApiFilePath: './openapi.json',
        skipValidation: true,
      },
    },
    {
      operationIdFactory: (c: string, method: string) => method,
    },
  );
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
