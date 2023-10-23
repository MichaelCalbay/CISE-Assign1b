// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as bodyParser from 'body-parser'

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors();
//   app.use(bodyParser.json());
  
//   await app.listen(3032);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter() 
  );

  app.enableCors();
  app.use(json()); 

  await app.listen(3032);
}
bootstrap();
