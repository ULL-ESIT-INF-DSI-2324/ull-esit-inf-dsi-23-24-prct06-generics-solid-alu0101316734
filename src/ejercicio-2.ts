/** @interface Bill_interface */
interface Bill_interface{
  cantidad:number;
  generate():string;
  descripcion:string
  precio:number;
}


/**@class  */
export abstract class Bill implements Bill_interface{
  constructor(public cantidad:number,public descripcion:string,public precio:number){
     /**@description Si la cantidad o precio es menor que 1 y la descripcion es vacia devuelve error */
    if(cantidad < 0 || precio < 0 || descripcion === "")
       throw new Error("Los argumentos no son permitidos");
  }
  /**@public clase abstracta*/
  abstract generate():string;
}

/**@class  HTML */
export class HTML extends Bill{
   /**@constructor */
constructor(public cantidad:number,public descripcion:string,public precio:number){
   super(cantidad,descripcion,precio);
}    /**@public metodo heredado con HTML */
   generate(): string {
      let formato:string="";
      formato+="cantidad     descripcion     precio" + "\n";
      formato+= this.cantidad + " " +this.descripcion + " "+ this.precio + "\n"
      return formato;
   }
}


/**@class  */
export class PDF extends Bill{
   /** @constructor */
    constructor(public cantidad:number,public descripcion:string,public precio:number){
        super(cantidad,descripcion,precio);
     }    
     /**@public metodo heredado para PDF*/
    generate(): string {
        let formato:string="";
        formato+="cantidad:" + this.cantidad  + "\n";
        formato+="descripcion:" + this.descripcion + "\n";
        formato+="precio:" + this.precio + "\n";
           return formato;
    }
}   
