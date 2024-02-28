import "mocha";
import { expect } from "chai";
import {Arithmeticable,ArithmeticableCollection,Racionals} from "../src/modificacion-1"


describe('Modificacion',() =>{
   it('compruebo si funciona bien',() => {
      const Racional =new Racionals(1,2)
      const Racional2 =new Racionals(1,3)
      const a= new ArithmeticableCollection<Racionals>([Racional]);
     /* expect(a.getArithmeticable(Racional)).to.be.equal(-1);
      expect(a.getNumberOfArithmeticables).to.be.equal(1);
      a.addArithmeticable(Racional2);
      expect((a.getNumberOfArithmeticables)).to.be.equal(2);*/
  
   })
})