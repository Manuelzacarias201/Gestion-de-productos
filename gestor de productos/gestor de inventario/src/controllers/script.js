import Producto from "../models/Producto.js";
import { bst } from "./dependencies.js";

document.getElementById("productForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let id = parseInt(document.getElementById("productId").value);
    let nombre = document.getElementById("productName").value;
    let precio = parseInt(document.getElementById("productPrice").value);
    let categoria = document.getElementById("productCategory").value;

    let producto = new Producto(id, nombre, precio, categoria);
    bst.insertar(producto);

    Swal.fire({
        icon: "success",
        text: "Registro exitoso",
    });
});

document.getElementById("searchProduct").addEventListener("click", () => {
    let searchQuery = parseInt(document.getElementById("searchQuery").value);
    let result = bst.buscar(searchQuery);
    
    if (result) {
        Swal.fire(`Producto encontrado: ${result.producto.nombre}, ${result.producto.precio} precio, Categoría: ${result.producto.categoria}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registro no encontrado",
        });
    }
});

document.getElementById("minValue").addEventListener("click", () => {
    let result = bst.obtenerMenorValor();
    if (result) {
        Swal.fire(`Producto menor: ${result.nombre}, ${result.precio} precio, Categoría: ${result.categoria}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay productos registrados",
        });
    }
});

document.getElementById("maxValue").addEventListener("click", () => {
    let result = bst.obtenerMayorValor();
    if (result) {
        Swal.fire(`Producto mayor: ${result.nombre}, ${result.precio} precio, Categoría: ${result.categoria}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay productos registrados",
        });
    }
});

document.getElementById("printAll").addEventListener("click", () => {
    let allProducts = [];
    bst.recorridoInorden(producto => allProducts.push(producto));

    if (allProducts.length > 0) {
        let message = allProducts.map(producto => `${producto.nombre}, ${producto.precio} precio, Categoría: ${producto.categoria}`).join('<br>');
        Swal.fire({
            icon: "info",
            title: "Todos los productos",
            html: message
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay productos registrados",
        });
    }
});



