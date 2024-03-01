import * as fs from 'fs';

/**@class File Manager gestiona el fichero y su lectura */
export class ReadFile {
  /**@constructor */
  constructor(protected filePath: string) {
  }

  /** @public lee el fichero de la ruta especificada */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error: any) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}
/** @class fichero para escribir */
export class WriteFile {
  /** @constructor */
  constructor(private filePath: string) {
  }   

  /** @public escribir en el fichero espesificado */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error:any) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  } 
}