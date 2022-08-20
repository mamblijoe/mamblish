import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('list')
  list() {
    const a = null;
    return [1, 2, 3];
  }
}
