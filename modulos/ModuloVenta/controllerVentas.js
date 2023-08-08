let indexVentaSeleccionada;
let VentasRealizadas = [];

let cliente,
    fecha,
    hora,
    empleado,
    productoVendido,
    cantidad,
    precio,
    estatus;

export function addVenta() {
    Swal.fire(
        'venta agregado',
        'Se ha agregado la venta con éxito',
        'success'
    )
    cliente = document.getElementById("txtCliente").value;
    fecha = document.getElementById("lstFecha").value;
    hora = document.getElementById("lstHora").value;
    empleado = document.getElementById("txtEmpleado").value;
    productoVendido = document.getElementById("txtProductoVend").value;
    cantidad = document.getElementById("txtCantidad").value;
    precio = document.getElementById("txtPrecio").value;

    let venta = {
        idVenta: VentasRealizadas.length + 1,
        cliente: cliente,
        fecha: fecha,
        hora: hora,
        empleado: empleado,
        productoVendido: productoVendido,
        cantidad: cantidad,
        precio: precio,
        estatus: "Activo"
    };

    VentasRealizadas.push(venta);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    VentasRealizadas.forEach(function (venta) {
        let registro =
            '<tr onclick="moduloVentas.selectVenta(' + VentasRealizadas.indexOf(venta) + ');">' +
            '<td>' + venta.idVenta + '</td>' +
            '<td>' + venta.cliente + '</td>' +
            '<td>' + venta.fecha + '</td>' +
            '<td>' + venta.hora + '</td>' +
            '<td>' + venta.empleado + '</td>' +
            '<td>' + venta.productoVendido + '</td>' +
            '<td>' + venta.cantidad + '</td>' +
            '<td>' + venta.precio + '</td>' +
            '<td>' + venta.estatus + '</td></tr>';
        cuerpo += registro;
    });

    let tblVentasRealizada = document.getElementById("tblVentasRealizada");
    if (tblVentasRealizada) {
        tblVentasRealizada.innerHTML = cuerpo;
    }
}

export function selectVenta(index) {
    cliente = document.getElementById("txtCliente").value = VentasRealizadas[index].cliente;
    fecha = document.getElementById("lstFecha").value = VentasRealizadas[index].fecha;
    hora = document.getElementById("lstHora").value = VentasRealizadas[index].hora;
    empleado = document.getElementById("txtEmpleado").value = VentasRealizadas[index].empleado;
    productoVendido = document.getElementById("txtProductoVend").value = VentasRealizadas[index].productoVendido;
    cantidad = document.getElementById("txtCantidad").value = VentasRealizadas[index].cantidad;
    precio = document.getElementById("txtPrecio").value = VentasRealizadas[index].precio;


    console.log("asdasd");
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexVentaSeleccionada = index;
}

export function clean() {
    cliente = document.getElementById("txtCliente").value = "";
    fecha = document.getElementById("lstFecha").value = "";
    hora = document.getElementById("lstHora").value = "";
    empleado = document.getElementById("txtEmpleado").value = "";
    productoVendido = document.getElementById("txtProductoVend").value = "";
    cantidad = document.getElementById("txtCantidad").value = "";
    precio = document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCliente").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexVentaSeleccionada = 0;
}

export function updateVenta() {
    Swal.fire(
        'Venta actualizada',
        'Se ha actualizado la venta con éxito',
        'success'
    )
    let cliente,
        fecha,
        hora,
        empleado,
        productoVendido,
        cantidad,
        precio,
        estatus;

    cliente = document.getElementById("txtCliente").value;
    fecha = document.getElementById("lstFecha").value;
    hora = document.getElementById("lstHora").value;
    empleado = document.getElementById("txtEmpleado").value;
    productoVendido = document.getElementById("txtProductoVend").value;
    cantidad = document.getElementById("txtCantidad").value;
    precio = document.getElementById("txtPrecio").value;

    let venta = {
        idVenta: VentasRealizadas[indexVentaSeleccionada].idVenta,
        cliente: cliente,
        fecha: fecha,
        hora: hora,
        empleado: empleado,
        productoVendido: productoVendido,
        cantidad: cantidad,
        precio: precio,
        estatus: "Activo"
    };
    VentasRealizadas[indexVentaSeleccionada] = venta;
    clean();
    loadTabla();
}

export function deleteVenta() {
    Swal.fire(
        'Venta eliminada',
        'Se ha eliminado la venta con éxito',
        'success'
    )
    VentasRealizadas[indexVentaSeleccionada].estatus = "Inactivo";
    clean();
    loadTabla();
}

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("/modulos/ModuloVenta/dataVentas.json")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (jsondata) {
//             VentasRealizadas = jsondata;
//             loadTabla();
//         });
// });

fetch("/modulos/ModuloVenta/dataVentas.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        VentasRealizadas = jsondata;
        console.log(VentasRealizadas);
        loadTabla();
    }
    );