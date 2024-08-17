/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // app.enableCors();
 app.enableCors({  
  origin: 'http://localhost:5173', // url dari FE  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
  credentials: true,  
});

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
