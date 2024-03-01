interface PrintableScannable {
    print(): string
    scan(): string
  }

interface Printable{
    print(): string;
}

interface Scannable {
    scan(): string
}
  
export  class Printer implements Printable {
    print(): string {
      return 'Printing...'
    }

  }
  
export  class Scanner implements Scannable {
  
    scan(): string {
      return 'Scanning...'
    }
}

export  class PrinterScanner implements PrintableScannable {
    print(): string {
      return 'Printing...'
    }
  
    scan(): string {
      return 'Scanning...'
    }
  }
  
 
  