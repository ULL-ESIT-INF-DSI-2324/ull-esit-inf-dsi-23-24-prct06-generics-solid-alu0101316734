import "mocha";
import {expect} from "chai";
import {Printer,Scanner,PrinterScanner} from "../src/ejercicio-4"



describe('Ejercicio 4 - Impresoras y escaneres',() =>{
    it('Comprobamos que imprime print funciona',() => {
        const print = new Printer();
        
      expect(print.print()).to.be.equal('Printing...')
    })
    it('Comprobamos que scanea scan funciona',() => {
        const scan = new Scanner;
        
      expect(scan.scan()).to.be.equal('Scanning...')
    })    
    it('Comprobamos que scaneamso scan funciona',() => {
        const scan = new Scanner;
        
      expect(scan.scan()).to.be.equal('Scanning...')
    })
    it('Comprobamos que scaneamso scan funciona',() => {
        const printscan = new PrinterScanner;
        
      expect(printscan.scan()).to.be.equal('Scanning...');
      expect(printscan.print()).to.be.equal('Printing...');
    })
})
