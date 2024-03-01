interface Bill_interface{
  cantidad:number;
  generate():string;
  descripcion:string
  precio:number;
}



export abstract class Bill implements Bill_interface{
  constructor(public cantidad:number,public descripcion:string,public precio:number){
    if(cantidad < 0 || precio < 0 || descripcion === "")
       throw new Error("Los argumentos no son permitidos");
  }
  abstract generate():string;
}

export class HTML extends Bill{
constructor(public cantidad:number,public descripcion:string,public precio:number){
   super(cantidad,descripcion,precio);
}    
   generate(): string {
      let formato:string="";
      formato+="cantidad     descripcion     precio" + "\n";
      formato+= this.cantidad + " " +this.descripcion + " "+ this.precio + "\n"
      return formato;
   }
}



export class PDF extends Bill{
    constructor(public cantidad:number,public descripcion:string,public precio:number){
        super(cantidad,descripcion,precio);
     }    
    generate(): string {
        let formato:string="";
        formato+="cantidad:" + this.cantidad  + "\n";
        formato+="descripcion:" + this.descripcion + "\n";
        formato+="precio:" + this.precio + "\n";
           return formato;
    }
}   
