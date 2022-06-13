export type TNotification = {
  id: number;
};

export class NotificationDto implements TNotification {
  id: number;

  read: boolean;

  notification: string;

  createdAt: string;
}
