let indexpedidoseleccionado;
let pedidos = [];

fetch("/modulos/ModuloPedidos/data_pedidos.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        pedidos = jsondata;
        console.log(pedidos);
        loadTabla();
        mostrarProductosDisponibles(pedidos);
    }
    );


function atenderPedido() {
    let pedido = pedidos[indexpedidoseleccionado];
    pedido.estado = "Atendido";
    loadTabla();
}


export function loadTabla() {
    let cuerpo = "";
    pedidos.forEach(function (pedido) {
        console.log(pedido)
        let registro =
            '<tr onclick="moduloPedidos.selectPedido(' + pedidos.indexOf(pedido) + ');">' +
            '<td>' + pedido.id + '</td>' +
            '<td>' + pedido.sucursal.nombre + '</td>' +
            '<td>' + pedido.estado + '</td>' +
            '<td>' + pedido.fechaCreacion + '</td>' +
            '</tr>';


        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("idContenedorTabla").innerHTML = cuerpo;

}

export function selectPedido(index) {

    document.getElementById("txtId").innerHTML = pedidos[index].id;
    document.getElementById("txtSucursal").innerHTML = pedidos[index].sucursal.nombre;
    document.getElementById("txtFecha").innerHTML = pedidos[index].fechaCreacion;
    document.getElementById("txtNombreEmpleado").innerHTML = pedidos[index].empleado.nombre;
    document.getElementById("txtSucEstado").innerHTML = pedidos[index].sucursal.estado;
    document.getElementById("txtSucCiudad").innerHTML = pedidos[index].sucursal.ciudad;
    document.getElementById("txtSucPais").innerHTML = pedidos[index].sucursal.pais;
    document.getElementById("txtSucCP").innerHTML = pedidos[index].sucursal.codigo_postal;

    loadProductos(pedidos[index].productos)
    loadResumenPedido(pedidos[index].productos)
}

function loadProductos(productos) {
    let cuerpo = "";
    productos.forEach(function (producto) {

        let registro =
            ' <div class="col">' +
            '<div class="card" style="width: 10rem; margin: 10px;">' +
            '<img src="https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/7501159580359.jpg?scale=500&qlty=75"class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<p class="card-title">' +
            producto.nombre
        '</p>' +
            '<p class="card-title">Paracetamol</p>' +
            '</div>' +
            '</div>' +
            '</div>';

        document.getElementById("idContedorProductos").innerHTML += registro;

    });

}

function loadResumenPedido(productos) {
    let precioTotal = 0;
    productos.forEach(producto => {
        let precioProducto = producto.precio;
        let unidadesProducto = producto.unidades;
        precioTotal += (precioProducto * unidadesProducto);
    });

    document.getElementById("txtPrecioSubtotal").innerHTML = "$" + precioTotal;
    document.getElementById("txtPrecioEnvio").innerHTML = "$30";

    let impuestos = precioTotal * .16;
    document.getElementById("txtPrecioImpuestos").innerHTML = "$" + impuestos;

    precioTotal = precioTotal + impuestos + 30;
    document.getElementById("txtPrecioTotal").innerHTML = "$" + precioTotal;


}

function mostrarProductosDisponibles(todosLosPedidos) {
    let cuerpo = "";
    for (let index = 0; index < todosLosPedidos.length; index++) {
        let pedido = todosLosPedidos[index];
        for (let index = 0; index < pedido.productos.length; index++) {
            let producto = pedido.productos[index];
            let registro =
                ' <div class="col">' +
                '<div class="card" style="width: 10rem; margin: 10px;">' +
                '<img src="https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/7501159580359.jpg?scale=500&qlty=75"class="card-img-top" alt="...">' +
                '<div class="card-body">' +
                '<p class="card-title" style="display:flex; justify-content:center"> cantidad:' + producto.unidades + '</p>' +
                '<div class="card-btns" style="display:flex; justify-content:center">' +


                '<button class="btn btn-primary">+</button>' +
                '<button class="btn btn-danger">-</button>' +
                '</div>' +
                '<p class="card-title mt-3 text-center" style="font-weight:bolder; text-aling:center">' +
                producto.nombre
            '</p>' +


                '</div>' +
                '</div>' +
                '</div>';

            document.getElementById("contenedorProductos").innerHTML += registro;
        }

    }

    todosLosPedidos.forEach(pedido => {
        let contador = 0;



    }
    );



}



//suscural
