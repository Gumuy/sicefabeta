let indexSucursalSeleccionada;
let sucursales = [];

export function addSucursal() {

    Swal.fire(
        'Sucursal agregada',
        'La sucursal ha sido agregada con éxito',
        'success'
    )
    let id,
        nombre,
        titular,
        codigo_postal,
        rfc,
        ciudad,
        colonia,
        calle,
        telefono,
        numero,
        estado,
        latitud,
        longitud;
    id = generarId();
    nombre = document.getElementById("txtNombre").value;
    titular = document.getElementById("txtTitular").value;
    codigo_postal = document.getElementById("txtCp").value;
    rfc = document.getElementById("txtRFC").value;
    ciudad = document.getElementById("txtCiudad").value;
    colonia = document.getElementById("txtColonia").value;
    calle = document.getElementById("txtCalle").value;
    telefono = document.getElementById("txtTelefono").value;
    numero = document.getElementById("txtNumero").value;
    estado = document.getElementById("lstEstado").value;
    latitud = document.getElementById("txtLatitud").value;
    longitud = document.getElementById("txtLongitud").value;

    let sucursal = {};
    sucursal.id = id;
    sucursal.nombre = nombre;
    sucursal.titular = titular;
    sucursal.codigo_postal = codigo_postal;
    sucursal.rfc = rfc;
    sucursal.ciudad = ciudad;
    sucursal.colonia = colonia;
    sucursal.calle = calle;
    sucursal.telefono = telefono;
    sucursal.numero = numero;
    sucursal.estado = estado;
    sucursal.latitud = latitud;
    sucursal.longitud = longitud;
    sucursal.estatus = "Activo";
    console.log(sucursal);
    sucursales.push(sucursal);
    clean();
    loadTabla();
}

function generarId() {
    let id = 1;
    if (sucursales.length > 0) {
        id = sucursales[sucursales.length - 1].id + 1;
    }
    return id;
}

export function loadTabla() {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {
        let registro =
            '<tr onclick="moduloSucursales.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
            '<td>' + sucursal.id + '</td>' +
            '<td>' + sucursal.nombre + '</td>' +
            '<td>' + sucursal.titular + '</td>' +
            '<td>' + sucursal.codigo_postal + '</td>' +
            '<td>' + sucursal.rfc + '</td>' +
            '<td>' + sucursal.ciudad + '</td>' +
            '<td>' + sucursal.colonia + '</td>' +
            '<td>' + sucursal.calle + '</td>' +
            '<td>' + sucursal.telefono + '</td>' +
            '<td>' + sucursal.numero + '</td>' +
            '<td>' + sucursal.estado + '</td>' +
            '<td>' + sucursal.latitud + '</td>' +
            '<td>' + sucursal.longitud + '</td>' +
            '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursales").innerHTML = cuerpo;

}

export function selectSucursal(index) {
    console.log(index);
    document.getElementById("txtNombre").value = sucursales[index].nombre;
    document.getElementById("txtTitular").value = sucursales[index].titular;
    document.getElementById("txtCp").value = sucursales[index].codigo_postal;
    document.getElementById("txtRFC").value = sucursales[index].rfc;
    document.getElementById("txtCiudad").value = sucursales[index].ciudad;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtCalle").value = sucursales[index].calle;
    document.getElementById("txtTelefono").value = sucursales[index].telefono;
    document.getElementById("txtNumero").value = sucursales[index].numero;
    document.getElementById("lstEstado").value = sucursales[index].estado;
    document.getElementById("txtLatitud").value = sucursales[index].latitud;
    document.getElementById("txtLongitud").value = sucursales[index].longitud;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexSucursalSeleccionada = index;
}

export function clean() {

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtTitular").value = "";
    document.getElementById("txtCp").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCalle").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtNumero").value = "";
    document.getElementById("lstEstado").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtLongitud").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexSucursalSeleccionada = 0;
}

export function updateSucursal() {
    let id,
        nombre,
        titular,
        codigo_postal,
        rfc,
        ciudad,
        colonia,
        calle,
        telefono,
        numero,
        estado,
        latitud,
        longitud;

    nombre = document.getElementById("txtNombre").value;
    titular = document.getElementById("txtTitular").value;
    codigo_postal = document.getElementById("txtCp").value;
    rfc = document.getElementById("txtRFC").value;
    ciudad = document.getElementById("txtCiudad").value;
    colonia = document.getElementById("txtColonia").value;
    calle = document.getElementById("txtCalle").value;
    telefono = document.getElementById("txtTelefono").value;
    numero = document.getElementById("txtNumero").value;
    estado = document.getElementById("lstEstado").value;
    latitud = document.getElementById("txtLatitud").value;
    longitud = document.getElementById("txtLongitud").value;

    let sucursal = {};
    sucursal.id = sucursales[indexSucursalSeleccionada].id;
    sucursal.nombre = nombre;
    sucursal.titular = titular;
    sucursal.codigo_postal = codigo_postal;
    sucursal.rfc = rfc;
    sucursal.ciudad = ciudad;
    sucursal.colonia = colonia;
    sucursal.calle = calle;
    sucursal.telefono = telefono;
    sucursal.numero = numero;
    sucursal.estado = estado;
    sucursal.latitud = latitud;
    sucursal.longitud = longitud;
    sucursal.estatus = "Activo";
    sucursales[indexSucursalSeleccionada] = sucursal;
    clean();
    loadTabla();

    Swal.fire(
        'Sucursal actualizada',
        'La sucursal ha sido actualizada con éxito',
        'success'
    )
}

export function deleteSucursal() {
    sucursales[indexSucursalSeleccionada].estatus = "Inactivo";
    clean();
    loadTabla();

    Swal.fire(
        'Sucursal eliminada',
        'La sucursal ha sido eliminada con éxito',
        'success'
    )
}

fetch("/modulos/ModuloSucursales/data_Sucursales.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        sucursales = jsondata;
        console.log(sucursales);
        loadTabla();
    }
    );

export function searchSucursal() {
    let filtro = document.getElementById("txtBusqueda").value;

    let resultados = sucursales.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (sucursal) {
        let registro =
            '<tr onclick="modulosSucursale.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
            '<td>' + sucursal.nombre + '</td>' +
            '<td>' + sucursal.titular + '</td>' +
            '<td>' + sucursal.codigo_postal + '</td>' +
            '<td>' + sucursal.rfc + '</td>' +
            '<td>' + sucursal.ciudad + '</td>' +
            '<td>' + sucursal.colonia + '</td>' +
            '<td>' + sucursal.calle + '</td>' +
            '<td>' + sucursal.telefono + '</td>' +
            '<td>' + sucursal.numero + '</td>' +
            '<td>' + sucursal.estado + '</td>' +
            '<td>' + sucursal.latitud + '</td>' +
            '<td>' + sucursal.longitud + '</td>' +
            '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursales").innerHTML = cuerpo;
}


