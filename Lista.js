export default class Lista {
    constructor() {
        this._firstNodo = null
        this._ultimoNodo = null
    }

    agregarNodo(nodo) {
        if (this._firstNodo == null) {
            this._firstNodo = objArticulo;
            this.endNodo = objArticulo;

        } else {
            this.endNodo.siguiente = nodo
            nodo.anterior = this.endNodo
            this.endNodo = nodo

        }
    }

    eliminarNodo(valor) {
        let nodoEliminar = this._buscarArticulo(valor);
        if (nodoEliminar) {
            if (valor == this._firstNodo.valor) {
                if (this._firstNodo.siguiente == null) {
                    this._firstNodo = this.endNodo = null;

                } else {
                    this._firstNodo = nodoEliminar.siguiente
                    this._firstNodo.anterior = null
                }

            } else if (valor == this.endNodo.valor) {

                this._ultimoNodo = nodoEliminar.anterior
                this._ultimoNodo.siguiente = null

            } else {

                let nodoTemporal = nodoEliminar.anterior;

                nodoEliminar.siguiente.anterior = nodoTemporal
                nodoTemporal.siguiente = nodoEliminar.siguiente;

                console.log(this._primerArticulo);
            }
        }
    }
}