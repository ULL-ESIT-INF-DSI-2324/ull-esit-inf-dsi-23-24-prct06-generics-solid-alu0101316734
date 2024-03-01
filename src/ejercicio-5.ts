/** @interface notification */
export interface notification{
   notify(message: string): string
}


// Class that allows notifications by email to be sent
/** @class Envia por servicio email */
export class EmailService implements notification {
    /**@public notificación */
    notify(message: string): string {
      return `Sending notification by email: ${message}`;
    }
  }
  
  // Class that allows notifications by SMS to be sent
  /** @class Envia por serviicio de SMS */
export class ShortMessageService implements notification {
  /**@public notificación */
    notify(message: string): string {
        return `Sending notification by SMS: ${message}`;
    }
  }
  
  // Class that makes use of different types of services to perform notifications
  /** @class Aqui se envía notificación */
export  class Notifier {
    /** @constructor */
    constructor(private notificationService: notification) {
    }
    /** @public envia notificación */
    sendNotification(message: string): string {
      return this.notificationService.notify(message);
    }
  }