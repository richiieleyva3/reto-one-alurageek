import deleteAPI from "./delete.js";

/* Implementamos la funcionalidad de borrar */
const eventosBorrarProductos = () => {
    const productosBorrar = document.getElementsByClassName('producto-icono-borrar');
    Array.from(productosBorrar).forEach(productoBorrar => {
        const productoId = productoBorrar.parentNode.parentNode.getElementsByClassName('producto-id')[0].textContent;
    
        productoBorrar.addEventListener('click', () => {
            deleteAPI(productoId).then(() => {
                console.log('Producto borrado');
            })
            .catch(error => {
                console.error('Error al borrar el producto', error);
            });
        });
    });
    }

    export default eventosBorrarProductos;