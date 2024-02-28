import "mocha";
import { expect } from "chai";
import {caja,enseres} from "../src/ejercicio-1"



describe('Ejercicio 1 - Gestión de mudanza',() => {
   it('Comprobamos que funciona correctamente',() =>{
      const enser = new enseres("mueble",15,1);
      let caja1 = new caja([],40);
      caja1.nuevo_enser(enser);
      expect(caja1.buscar_enser("mueble")).to.be.true;
      expect(caja1.es_peso_max()).to.be.false;
   })
   it('Probamos si falla el nuevo_enser',() =>{
      const enser = new enseres("mueble",20,1);
      const enser2 = new enseres("sofa",25,1);
      let caja1 = new caja([],40);
      caja1.nuevo_enser(enser);
      expect(() => { caja1.nuevo_enser(enser2); }).to.throw(Error, "El peso es demasiado");
   })
   it('Comprobamos si buscar funciona correctamente',() => {
    const enser = new enseres("mueble",20,1);
    let caja1 = new caja([],40);
    caja1.nuevo_enser(enser);
    expect(caja1.buscar_enser("mueble")).to.be.equal(true);
    expect(caja1.buscar_enser("muebl")).to.be.equal(false);
   })
   it('Comprobamos que pasa si instanciamos mal eneres',()=>{
    expect(() => { const enser = new enseres("cama", -1 , 1); }).to.throw(Error, "El numero tiene que ser mayor que 0");
    expect(() => { const enser = new enseres("cama", 1 , -1); }).to.throw(Error, "El numero tiene que ser mayor que 0");
   })
   it('Comprobamos si podemos quitar enseres de la caja ', () =>{
     const enser = new enseres("mueble",20,1);
     const enser2 = new enseres("sofa",25,1); 
     let caja1 = new caja([enser,enser2],50);  
     caja1.eliminar_enser("mueble");
     expect(caja1.buscar_enser("mueble")).to.be.equal(false);
   })
})