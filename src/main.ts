import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validation decorator 를 사용하지 않는 obj 제거
      forbidNonWhitelisted: true, // whitelist 에 없는 property 있을 경우 error 발생
      transform: true, // url의 param을 string -> number 변환할 수 있게 함
    }),
  );
  await app.listen(3000);
}
bootstrap();
