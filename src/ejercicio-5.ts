export interface notification{
   notify(message: string): string
}


// Class that allows notifications by email to be sent
export class EmailService implements notification {
    notify(message: string): string {
      return `Sending notification by email: ${message}`;
    }
  }
  
  // Class that allows notifications by SMS to be sent
export class ShortMessageService implements notification {
    notify(message: string): string {
        return `Sending notification by SMS: ${message}`;
    }
  }
  
  // Class that makes use of different types of services to perform notifications
export  class Notifier {
    constructor(private notificationService: notification) {
    }
  
    sendNotification(message: string): string {
      return this.notificationService.notify(message);
    }
  }