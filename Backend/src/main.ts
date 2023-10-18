import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //Aqui ele importa a nossa appModule
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import * as cors from 'cors';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {

  const expressApp = express();
  const app = await NestFactory.create(AppModule,new ExpressAdapter(expressApp),); //load app module
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
    
  ); //serve para usarmos as validacoes e aceitarmos apenas o que queremos

  // Enable CORS
  app.use(cors());
  await app.listen(3000); //start the site

}

bootstrap();