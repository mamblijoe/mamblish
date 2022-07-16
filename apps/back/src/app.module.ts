import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { NotificationGateway } from './notification/notification.gateway';
import { ScheduleModule } from '@nestjs/schedule';
import {TypeOrmModule} from "@nestjs/typeorm";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'db',
    password: 'db',
    database: 'db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
  }),NotificationModule, ScheduleModule.forRoot(), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
