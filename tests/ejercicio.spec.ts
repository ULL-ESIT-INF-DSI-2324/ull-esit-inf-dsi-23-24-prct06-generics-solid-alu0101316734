import "mocha";
import { expect } from "chai";
import {caja,enseres_interface} from "../src/ejercicio-1"



describe('Ejercicio 1 - Gestión de mudanza',() => {
   it('Comprobamos que funciona correctamente',() =>{
      const enser: enseres_interface = {
         nombre: "mueble",
         peso: 20,
         n_enseres: 1
     };
      let caja1 = new caja([],40);
      caja1.nuevo_enser(enser);
      expect(caja1.buscar_enser("mueble")).to.be.true;
      expect(caja1.es_peso_max()).to.be.false;
   })
   it('Probamos si falla el nuevo_enser',() =>{
      const enser: enseres_interface = {
         nombre: "mueble",
         peso: 20,
         n_enseres: 1
     };
     const enser2: enseres_interface = {
      nombre: "sofa",
      peso: 25,
      n_enseres: 1
  };
      let caja1 = new caja([],40);
      caja1.nuevo_enser(enser);
      expect(() => { caja1.nuevo_enser(enser2); }).to.throw(Error, "El peso es demasiado");
   })
   it('Comprobamos si buscar funciona correctamente',() => {
      const enser: enseres_interface = {
         nombre: "mueble",
         peso: 20,
         n_enseres: 1
     };
    let caja1 = new caja([],40);
    caja1.nuevo_enser(enser);
    expect(caja1.buscar_enser("mueble")).to.be.equal(true);
    expect(caja1.buscar_enser("muebl")).to.be.equal(false);
   })
   it('Comprobamos si podemos quitar enseres de la caja ', () =>{
      const enser: enseres_interface = {
         nombre: "mueble",
         peso: 20,
         n_enseres: 1
     };
     const enser2: enseres_interface = {
      nombre: "sofa",
      peso: 25,
      n_enseres: 1
  };
     let caja1 = new caja([enser,enser2],50);  
     caja1.eliminar_enser("mueble");
     expect(caja1.buscar_enser("mueble")).to.be.equal(false);
   })
})