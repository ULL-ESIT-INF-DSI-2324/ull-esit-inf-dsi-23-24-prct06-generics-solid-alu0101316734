interface Bill_interface{
  cantidad:number;
  generate():string;
  descripcion:string
  precio:number;
}



export abstract class Bill implements Bill_interface{
  constructor(public cantidad:number,public descripcion:string,public precio:number){

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
      formato+="${cantidad}     ${descripcion}     ${precio}"
      return formato;
   }
}



export class PDF extends Bill{
    constructor(public cantidad:number,public descripcion:string,public precio:number){
        super(cantidad,descripcion,precio);
     }    
    generate(): string {
        let formato:string="";
        formato+="cantidad:${cantidad} " + "\n";
        formato+="descripcion:${descripcion} " + "\n";
        formato+="precio:${precio} " + "\n";
           return formato;
    }
}   
