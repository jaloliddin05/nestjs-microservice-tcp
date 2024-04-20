import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { TcpOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PostModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
