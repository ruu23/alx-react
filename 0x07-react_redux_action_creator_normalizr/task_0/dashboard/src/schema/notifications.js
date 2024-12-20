import * as notifications from '/data/notifications.json';

export default function getAllNotificationsByUser(userId){
  return notifications
  .filter((notification) => notification.author.id === userId)
  .map((notification) => notification.context)
}
