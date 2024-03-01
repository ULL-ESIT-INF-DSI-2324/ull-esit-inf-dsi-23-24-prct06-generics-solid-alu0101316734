import * as fs from 'fs';

export class FileManager {
  constructor(protected filePath: string) {
  }

  // Reads file
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

export class WriteFileManager extends FileManager {
  constructor(filePath: string) {
    super(filePath);
  }   

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error:any) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  } 
}