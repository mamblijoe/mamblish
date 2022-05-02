import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  emitNotification(message: string) {
    this.server.emit('notification', message);
  }

  @SubscribeMessage('notification')
  notification(@MessageBody() data: Notification[]) {
    return data;
  }
}
