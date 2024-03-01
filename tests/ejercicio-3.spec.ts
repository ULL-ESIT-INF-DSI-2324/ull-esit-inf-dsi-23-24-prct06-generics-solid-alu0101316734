import "mocha";
import { expect, } from "chai";
import { FileManager,WriteFileManager } from "../src/ejercicio-3";


describe('Ejercicio 3 - Gestor de fichero',() =>{
    it('Comprobamos que lee el FileManger',() => {
        const read = new FileManager("/home/usuario/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734/tests/text.txt")
        expect(read.readFile()).to.be.equal('hola')
    })
    it('Comprobamos que lee el WriterFileManger',() => {
        let write = new WriteFileManager("/home/usuario/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734/tests/text.txt")
        write.writeFile('hola');
        expect(write.readFile()).to.be.equal('hola')
    })
    it('Comprobamos si falla FileManager',() => {

        const read = new FileManager("/text.txt")
        expect(read.readFile()).to.be.equal('')       
    })  
    it('Comprobamos si falla el WriterFileManger',() => {
        let write = new WriteFileManager("/home/usuario/ull-esit-inf-dsi-23-24-pralu0101316734/tests/text.txt")
        write.writeFile('hola');
        expect(write.readFile()).to.be.equal('')
    })
})