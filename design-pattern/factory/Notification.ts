interface NotificationI {
  send(): void;
}

class EmailNotification implements NotificationI {
  send() {
    console.log("Sending email notification");
  }
}

class SMSNotification implements NotificationI {
  send() {
    console.log("Sending SMS notification");
  }
}

class NotificationFactory {
  getNotification(type: string): NotificationI | undefined {
    if (type === "SMS") {
      return new SMSNotification();
    } else if (type === "Email") {
      return new EmailNotification();
    }
  }
}

export default NotificationFactory;
