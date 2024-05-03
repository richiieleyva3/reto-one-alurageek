import getAPI from "./get.js";
import eventosBorrarProductos from "./borrarProducto.js";

/* Implementamos la funcionalidad de cargar los productos desde la api */
const getProductos = document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.getElementsByClassName('lista-productos')[0];

    getAPI().then(data => {
        let html = '';
        data.forEach(producto => {
            let precioFormateado = producto.precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
            html += `
                <div class="producto">
                    <div class="producto-id">${producto.id}</div>
                    <div class="producto-imagen"><img src="${producto.imagen}" /></div>
                    <div class="producto-nombre font-player">${producto.nombre}</div>
                    <div class="producto-barra-inferior">
                        <div class="producto-precio font-player">${precioFormateado}</div>
                        <div class="producto-icono-borrar"><i class="bi bi-trash-fill"></i></div>
                    </div>
                </div>
            `;
        });
        listaProductos.innerHTML = html;
        eventosBorrarProductos();
    });
});

export default getProductos;