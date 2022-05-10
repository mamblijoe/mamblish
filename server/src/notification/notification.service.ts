import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  private users: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Ivan',
    },
    {
      id: 2,
      name: 'Petr',
    },
  ];
  private room: string = null;

  @Cron(CronExpression.EVERY_5_SECONDS)
  public async emitNotification(): Promise<void> {
    try {
      await this.notificationGateway.emitNotification(this.users);
    } catch (e) {
      console.log('error::::', e);
    }
  }

  public async setName(body: { id: number; name: string }) {
    const user = this.users.find(({ id }) => id === Number(body.id));
    user.name = body.name;
    console.log(`Пользователь с id ${body.id} изменил имя на ${body.name}`);
  }

  public async setRoom(room: string) {
    this.room = `room_${room}`;
  }

  getAll = async () => {
    return [];
  };
}
