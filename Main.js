import Nodo from "./Nodo";
import Lista from "./Lista";
class Main {
    constructor() {
        this._lista = new Lista();

        document.getElementById('btn').addEventListener('click', () => {
            let expresion = document.getElementById('expresion').value;
            for (let i = 0; expre.length > i; i++) {

                let valor = expresion.charAt(i);
                let nuevoNodo = new Nodo(valor)
                this._lista.agregarNodo(nuevoNodo)

            }
        });
    }
}

let m = new Main();