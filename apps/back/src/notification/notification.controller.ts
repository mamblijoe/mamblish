import {Body, Controller, Get, Post} from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('set-name')
  public async setName(@Body() body: { name: string; id: number }) {
    await this.notificationService.setName(body);
    return true;
  }

  @Post('set-room')
  public async setRoom(@Body() body: { name: string }) {
    await this.notificationService.setRoom(body.name);
    return true;
  }

  @Get('get')
  public async getTest() {
    return ['test']
  }
}
