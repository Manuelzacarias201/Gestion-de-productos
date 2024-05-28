import Nodo from "./Node.js";

class BST {
    constructor() {
        this.raiz = null;
    }

    insertar(producto) {
        const nuevoNodo = new Nodo(producto);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }
    }

    _insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.producto.id < nodo.producto.id) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this._insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this._insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    buscar(id) {
        return this._buscarNodo(this.raiz, id);
    }

    _buscarNodo(nodo, id) {
        if (nodo === null || nodo.producto.id === id) {
            return nodo;
        } else if (id < nodo.producto.id) {
            return this._buscarNodo(nodo.izquierda, id);
        } else {
            return this._buscarNodo(nodo.derecha, id);
        }
    }

    obtenerMenorValor() {
        let actual = this.raiz;
        while (actual.izquierda !== null) {
            actual = actual.izquierda;
        }
        return actual.producto;
    }

    obtenerMayorValor() {
        let actual = this.raiz;
        while (actual.derecha !== null) {
            actual = actual.derecha;
        }
        return actual.producto;
    }

    recorridoInorden(callback) {
        this._recorridoInordenNodo(this.raiz, callback);
    }

    _recorridoInordenNodo(nodo, callback) {
        if (nodo !== null) {
            this._recorridoInordenNodo(nodo.izquierda, callback);
            callback(nodo.producto);
            this._recorridoInordenNodo(nodo.derecha, callback);
        }
    }
}

export default BST;


