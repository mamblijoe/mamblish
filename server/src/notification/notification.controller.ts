import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('set')
  public async setName(@Body() body: { name: string }) {
    console.log('bodu', body.name);
    await this.notificationService.setName(body.name);
  }

  @Get()
  public async test() {
    return 'asdasd';
  }
}
