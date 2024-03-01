/**@interface enseres_interface */
export interface enseres_interface{
    nombre:string;
    peso:number;
    n_enseres:number;
}




/**@class caja donde se almacena los enseres*/
export class caja{
    /**@protected */
    protected _enseres:Array<enseres_interface>
    /**@private */
    private _max_peso:number=0;
    /**@constructor */
    constructor(enseres:enseres_interface[],_max_peso:number){
      this._enseres=enseres;
      this._max_peso=_max_peso;
    }
    /**@public devuelve true si esta llena, false si no es asi y undefiend si sobrepasa el peso */
    es_peso_max():undefined | boolean
    {
      let num: number = 0;
      this._enseres.forEach(enser => {
          num += enser.n_enseres * enser.peso;
      });
      if (num > this._max_peso) {
          return undefined;
      } else if (num === this._max_peso) {
          return true;
      } else {
          return false;
      }
    }
    /**@public busca un enser*/
    buscar_enser(nombre: string): boolean{
        let existe: boolean = false;
        this._enseres.forEach(element => {
            if (nombre === element.nombre) {
                existe = true;
            }
        });
        return existe;
    }
    /**@public introduce un enser a la lista*/
    nuevo_enser(enser_nuevo:enseres_interface):void{   
      if(this.buscar_enser(enser_nuevo.nombre))
         this._enseres.forEach(element =>{
           if(element.nombre === enser_nuevo.nombre)
              element.n_enseres+=enser_nuevo.n_enseres;    
         })
      else
         this._enseres.push(enser_nuevo);
      if(this.es_peso_max() === undefined)
        throw new Error('El peso es demasiado');
    }
    /**@public elimina un enser de la lista*/
    eliminar_enser(nombre_eliminar:string):void{
      this._enseres.forEach((enser,index) => {
        if(enser.nombre === nombre_eliminar)
          if(enser.n_enseres != 1)
             enser.n_enseres--;
          else
            this._enseres.splice(index, 1);
      })
    }
}


