import "mocha"
import { expect } from "chai";
import {Notifier,ShortMessageService,EmailService} from "../src/ejercicio-5";


describe('Ejercicio 5 - Servicio de mensajería',() =>{
   it('Comprabamos si funciona la notificación por SMS',()=>{
      const SMS = new ShortMessageService(); 
      const notificacion = new Notifier(SMS);
      expect(notificacion.sendNotification('Esto es un mensaje')).to.be.equal('Sending notification by SMS: Esto es un mensaje');
   }) 
   it('Comprabamos si funciona la notificación por SMS',()=>{
    const email = new EmailService(); 
    const notificacion = new Notifier(email);
    expect(notificacion.sendNotification('Esto es un mensaje')).to.be.equal('Sending notification by SMS: Esto es un mensaje');
 })   
})