import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { NotificationGateway } from './notification/notification.gateway';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [NotificationModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
