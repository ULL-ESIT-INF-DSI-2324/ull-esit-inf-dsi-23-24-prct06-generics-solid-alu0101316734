import "mocha";
import { expect } from "chai";
import {Arithmeticable,ArithmeticableCollection,Complex,Racionals} from "../src/modificacion-1"


describe('Modificacion',() =>{
   it('compruebo si funciona bien los racional',() => {
      const Racional =new Racionals(1,2)
      const Racional2 =new Racionals(1,3)
      const a= new ArithmeticableCollection<Racionals>([Racional]);
      expect(a.getArithmeticable(0)).to.be.equal(Racional);
   })
   it('compruebo que funciona para los complejos',() =>{
      const complejo = new Complex(1,5)
      const a = new ArithmeticableCollection<Complex>([complejo]);
      expect(a.getArithmeticable(0)).to.be.equal(complejo);
   })
   it('compruebo que funciona para los complejos',() =>{
      const complejo = new Complex(1,5)
      const a = new ArithmeticableCollection<Complex>([complejo]);
      expect(a.getArithmeticable(0)).to.be.equal(complejo);
   })
   it('Compruebo que funciona el obtener tamaño',() =>{
      const a = new ArithmeticableCollection<Complex>([new Complex(1,1)]);
      expect(a.getNumberOfArithmeticables()).to.be.equal(1);
   })
   it('Comprobamos si falla la indexacion',()=>{   
      const complejo = new Complex(1,5)
      const a = new ArithmeticableCollection<Complex>([complejo]);
      expect(a.getArithmeticable(-1)).to.be.undefined;
   })
   it('Comrpuebo que puedo añadir otro numero',()=>{
      let  a = new ArithmeticableCollection<Racionals>([new Racionals(1,2)])
      const nuevo_numero = new Racionals(2,1);
      a.addArithmeticable(nuevo_numero);
      expect(a.getNumberOfArithmeticables()).to.be.equal(2);
   })
   it('Comprubo que funciona add para racional',() => {
      const racional1 = new Racionals(1,2);
      const racional2 = new Racionals(1,2);
      const racional3 = new Racionals(1,1);
      expect(racional1.add(racional2)).to.deep.equal(racional3);
   })
   it('Compruebo que funciona add para complejos',() => {
      const complejo1 = new Complex(1,2);
      const complejo2 = new Complex(1,2);
      const complejo3 = new Complex(2,4);
      expect(complejo1.add(complejo2)).to.deep.equal(complejo3);
   })
   it('Comprubo que funciona substract para racional',() => {
      const racional1 = new Racionals(2,2);
      const racional2 = new Racionals(1,2);
      const racional3 = new Racionals(1,2);
      expect(racional1.substract(racional2)).to.deep.equal(racional3);
   })
   it('Compruebo que funciona substract para complejos',() => {
      const complejo1 = new Complex(2,4);
      const complejo2 = new Complex(1,2);
      const complejo3 = new Complex(1,2);
      expect(complejo1.substract(complejo2)).to.deep.equal(complejo3);
   })
   it('Compruebo que funciona multiply para racional',() => {
      const racional1 = new Racionals(1,2);
      const racional2 = new Racionals(1,3);
      const racional3 = new Racionals(1,6);
      expect(racional1.multiply(racional2)).to.deep.equal(racional3);
   })
   it('Compruebo que funciona multiply para complejos',() => {
      const complejo1 = new Complex(1,2);
      const complejo2 = new Complex(2,2);
      const complejo3 = new Complex(2,4);
      expect(complejo1.multiply(complejo2)).to.deep.equal(complejo3);
   }) 
   it('Compruebo que funciona divide para racional',() => {
      const racional1 = new Racionals(1,2);
      const racional2 = new Racionals(1,2);
      const racional3 = new Racionals(1,1);
      expect(racional1.divide(racional2)).to.deep.equal(racional3);
   })
   it('Compruebo que funciona divide para complejos',() => {
      const complejo1 = new Complex(4,8);
      const complejo2 = new Complex(2,2);
      const complejo3 = new Complex(2,4);
      expect(complejo1.divide(complejo2)).to.deep.equal(complejo3);
   }) 
})