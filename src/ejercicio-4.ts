/**@interface PrintableScannable */
export interface PrintableScannable {
    print(): string
    scan(): string
  }
/**@interface Printable */
export interface Printable{
    print(): string;
}

/**@interface Scannable */
export interface Scannable {
    scan(): string
}


/**@class __Printer__   */
export  class Printer implements Printable {
    /** @public  acción de imprimir */
    print(): string {
      return 'Printing...'
    }

  }
  
/** @class __Scanner__*/
export  class Scanner implements Scannable {
    /** @public acción escanea */
    scan(): string {
      return 'Scanning...'
    }
}

/** @class __PrinterScanner__ */
export  class PrinterScanner implements PrintableScannable {
  /** @public acción de imprimir */
    print(): string {
      return 'Printing...'
    }
    /** @public acción de escanear */
    scan(): string {
      return 'Scanning...'
    }
  }
  
 
  