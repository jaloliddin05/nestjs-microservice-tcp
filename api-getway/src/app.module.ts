import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PostController } from './controllers/post.controller';

@Module({
  imports: [],
  controllers: [UserController,PostController],
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
  ],
})
export class AppModule {}
