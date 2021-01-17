import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || config.get('server').port;
  await app.listen(port);
}
bootstrap();
