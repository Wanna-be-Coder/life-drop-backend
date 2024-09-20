import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProfileController);
  }
}
