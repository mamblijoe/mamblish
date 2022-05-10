import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { parse } from 'cookie';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  async emitNotification(users: { id: number; name: string }[]) {
    users.forEach(({ id, name }) => {
      this.server
        .in(String(`room_${id}`))
        .emit(
          'notification',
          `Привет от сервера${name ? ', ' : '!'} ${name || ''}`,
        );
    });
  }

  @SubscribeMessage('notification')
  notification(
    @MessageBody() body: string[],
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('socket', socket);
    return body;
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string) {
    client.join(room);
    client.emit('joinedRoom', { room, client: client.id });
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, room: string) {
    client.leave(room);
    client.emit('leftRoom', room);
  }

  async getUserFromSocket(socket: Socket) {
    const cookie = socket.handshake.headers.cookie;
    const { Authentication: authenticationToken } = parse(cookie);
    console.log('authenticationToken', authenticationToken);
    const user = 1;
    if (!user) {
      throw new WsException('Invalid credentials.');
    }
    return user;
  }
}
