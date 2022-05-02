import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  private name: string = null;

  @Cron(CronExpression.EVERY_5_SECONDS)
  public async emitNotification(): Promise<void> {
    const name = this.name || '';
    try {
      this.notificationGateway.emitNotification(`Привет от сервера! ${name}`);
    } catch (e) {
      console.log('error::::', e);
    }
  }

  public async setName(name: string) {
    this.name = name;
  }
}
