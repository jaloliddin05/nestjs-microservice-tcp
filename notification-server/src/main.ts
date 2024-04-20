import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { TcpOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NotificationModule, {
    transport: Transport.TCP,
    options: {
      port: 3003,
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
