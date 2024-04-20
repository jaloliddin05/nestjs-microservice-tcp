import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PostController } from './controllers/post.controller';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [],
  controllers: [UserController,PostController,NotificationController],
  providers: [
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: 3001,
          },
        });
      },
    },
    {
      provide: 'POST_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: 3002,
          },
        });
      },
    },
    {
      provide: 'NOTIFICATION_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: 3003,
          },
        });
      },
    },
  ],
})
export class AppModule {}
