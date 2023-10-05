import NotificationFactory from "./Notification";

const notificationFactory = new NotificationFactory();

const emailNotification = notificationFactory.getNotification("Email");
emailNotification?.send();

const smsNotification = notificationFactory.getNotification("SMS");
smsNotification?.send();
