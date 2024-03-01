import "mocha";
import { expect } from "chai";
import { Bill,PDF,HTML } from "../src/ejercicio-2";


describe('Ejercicio 2 - Generador de facturas',() =>{
    it('Comprobamos que funciona para PDF',() =>{
        const pdf = new PDF(1,"muebles",100)
        expect(pdf.generate()).to.be.equal("cantidad:1\ndescripcion:muebles\nprecio:100\n");
    })
    it('Comprobamos que funciona para HTML',() =>{
        const html = new HTML(1,"muebles",100)
        expect(html.generate()).to.be.equal("cantidad     descripcion     precio\n1 muebles 100\n" );
    })
    it('Comprobamos si funicona los argumentos erroneos',() =>{
        expect(()=>{const html = new HTML(-1,"muebles",100)}).to.throw(Error,"Los argumentos no son permitidos")
        expect(()=>{const html = new HTML(1,"",100)}).to.throw(Error,"Los argumentos no son permitidos")
        expect(()=>{const html = new HTML(1,"muebles",-100)}).to.throw(Error,"Los argumentos no son permitidos")
    })
})
