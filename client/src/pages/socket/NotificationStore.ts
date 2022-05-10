import { makeAutoObservable } from "mobx";
import { io, Socket } from "socket.io-client";
class NotificationStore {
  public notifications: string[] = [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  readonly socket: Socket;

  constructor(private room: string) {
    makeAutoObservable(this);
    if (typeof window !== "undefined") {
      this.socket = io(":5000", { transports: ["websocket"] });
      this.subscribe();
    }
  }

  subscribe = () => {
    this.socket.emit("joinRoom", this.room);
    this.socket.on("notification", (notification: string) => {
      this.updateNotifications(notification);
    });
  };

  updateNotifications = (notification: string) => {
    this.notifications = [...this.notifications, notification];
  };
}

export default NotificationStore;
