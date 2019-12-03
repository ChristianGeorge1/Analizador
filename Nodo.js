export default class Nodo {
    constructor(valor) {
        this._valor = valor;
        this._siguiente = null;
        this._anterior = null;
        this._derecha = null;
        this._izquierda = null;
    }

    get valor() {
        return this._valor;
    }
    set valor(v) {
        v = this._valor;
    }
}