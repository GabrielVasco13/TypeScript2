import { Imprivivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprivivel[]) {
    for (let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}