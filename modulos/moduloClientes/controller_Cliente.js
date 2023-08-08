let indexClienteSeleccionado;
let clientes = [];

export function addCliente() {
    Swal.fire(
        'Cliente agregado',
        'Se ha agregado el cliente con éxito',
        'success'
    )
    let nombre,
        primer_apellido,
        segundo_apellido,
        domicilio,
        codigo_postal,
        rfc,
        curp,
        ciudad,
        fecha_ingreso,
        genero,
        estado,
        email,
        fecha_nacimiento,
        telefono,
        venta_publico,
        estatus;

    nombre = document.getElementById("txtNombre").value;
    primer_apellido = document.getElementById("txtPrimApellido").value;
    segundo_apellido = document.getElementById("txtSegunApellido").value;
    domicilio = document.getElementById("txtDomicilio").value;
    codigo_postal = document.getElementById("txtCodPostal").value;
    rfc = document.getElementById("txtRfc").value;
    curp = document.getElementById("txtCurp").value;
    ciudad = document.getElementById("txtCiudad").value;
    fecha_ingreso = document.getElementById("txtFechIngreso").value;
    estado = document.getElementById("txtEstado").value;
    email = document.getElementById("txtEmail").value;
    fecha_nacimiento = document.getElementById("txtFechNacimiento").value;
    telefono = document.getElementById("txtTelefono").value;
    venta_publico = document.getElementById("txtVentPublico").value;
    estatus = "activo"
    genero = document.getElementById("txtGenero").value;;

    let cliente = {};
    cliente.nombre = nombre;
    cliente.primer_apellido = primer_apellido;
    cliente.segundo_apellido = segundo_apellido;
    cliente.domicilio = domicilio;
    cliente.codigo_postal = codigo_postal;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.fecha_ingreso = fecha_ingreso;
    cliente.genero = genero;
    cliente.estado = estado;
    cliente.email = email;
    cliente.fecha_nacimiento = fecha_nacimiento;
    cliente.telefono = telefono;
    cliente.venta_publico = venta_publico;
    cliente.estatus = estatus;
    clientes.push(cliente);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let registro =
            '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
            '<td>' + cliente.nombre + '</td>' +
            '<td>' + cliente.primer_apellido + ' ' + cliente.segundo_apellido + '</td>' +
            '<td>' + cliente.genero + '</td>' +
            '<td>' + cliente.telefono + '</td>' +
            '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;

}

export function selectCliente(index) {
    document.getElementById("txtNombre").value = clientes[index].nombre;
    document.getElementById("txtPrimApellido").value = clientes[index].primer_apellido;
    document.getElementById("txtSegunApellido").value = clientes[index].segundo_apellido;
    document.getElementById("txtDomicilio").value = clientes[index].domicilio;
    document.getElementById("txtCodPostal").value = clientes[index].codigo_postal;
    document.getElementById("txtRfc").value = clientes[index].rfc;
    document.getElementById("txtCurp").value = clientes[index].curp;
    document.getElementById("txtCiudad").value = clientes[index].ciudad;
    document.getElementById("txtFechIngreso").value = clientes[index].fecha_ingreso;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("txtEstado").value = clientes[index].estado;
    document.getElementById("txtEmail").value = clientes[index].email;
    document.getElementById("txtFechNacimiento").value = clientes[index].fecha_nacimiento;
    document.getElementById("txtTelefono").value = clientes[index].telefono;
    document.getElementById("txtVentPublico").value = clientes[index].venta_publico;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtPrimApellido").value = "";
    document.getElementById("txtSegunApellido").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtCodPostal").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtCurp").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtFechIngreso").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtFechNacimiento").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtVentPublico").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateCliente() {
    Swal.fire(
        'Cliente actualizado',
        'Se ha actualizado el cliente con éxito',
        'success'
    )
    let nombre,
        primer_apellido,
        segundo_apellido,
        domicilio,
        codigo_postal,
        rfc,
        curp,
        ciudad,
        fecha_ingreso,
        genero,
        estado,
        email,
        fecha_nacimiento,
        telefono,
        venta_publico;


    nombre = document.getElementById("txtNombre").value;
    primer_apellido = document.getElementById("txtPrimApellido").value;
    segundo_apellido = document.getElementById("txtSegunApellido").value;
    domicilio = document.getElementById("txtDomicilio").value;
    codigo_postal = document.getElementById("txtCodPostal").value;
    rfc = document.getElementById("txtRfc").value;
    curp = document.getElementById("txtCurp").value;
    ciudad = document.getElementById("txtCiudad").value;
    fecha_ingreso = document.getElementById("txtFechIngreso").value;
    estado = document.getElementById("txtEstado").value;
    email = document.getElementById("txtEmail").value;
    fecha_nacimiento = document.getElementById("txtFechNacimiento").value;
    telefono = document.getElementById("txtTelefono").value;
    venta_publico = document.getElementById("txtVentPublico").value;

    genero = document.getElementById("txtGenero").value;;

    let cliente = {};
    cliente.nombre = nombre;
    cliente.primer_apellido = primer_apellido;
    cliente.segundo_apellido = segundo_apellido;
    cliente.domicilio = domicilio;
    cliente.codigo_postal = codigo_postal;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.fecha_ingreso = fecha_ingreso;
    cliente.genero = genero;
    cliente.estado = estado;
    cliente.email = email;
    cliente.fecha_nacimiento = fecha_nacimiento;
    cliente.telefono = telefono;
    cliente.venta_publico = venta_publico;
    cliente.estatus = clientes[indexClienteSeleccionado].estatus;
    clientes[indexClienteSeleccionado] = cliente;
    clean();
    loadTabla();
}
export function filterEstatus() {
    let filtroEstatus = document.getElementById("lstFilterEstatus").value;
    console.log(filtroEstatus);
    if (filtroEstatus != "Elige una opción") {
        let resultados = clientes.filter(element => element.estatus === filtroEstatus);
        let cuerpo = "";
        resultados.forEach(function (cliente) {
            let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.primer_apellido + ' ' + cliente.segundo_apellido + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
            cuerpo += registro;
        });
        console.log(cuerpo);
        document.getElementById("tblClientes").innerHTML = cuerpo;

    } else {
        let cuerpo = "";
        clientes.forEach(function (cliente) {
            let registro =
                '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.primer_apellido + ' ' + cliente.segundo_apellido + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
            cuerpo += registro;
        });
        console.log(cuerpo);
        document.getElementById("tblClientes").innerHTML = cuerpo;
    }

}

export function deleteCliente() {
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();

    Swal.fire(
        'Cliente eliminado',
        'Se ha eliminado el cliente con éxito',
        'success'
    )
}

fetch("/modulos/moduloClientes/data_Clientes.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        clientes = jsondata;
        console.log(clientes);
        loadTabla();
    }
    );

export function searchCliente() {
    let filtro = document.getElementById("txtBusquedaCliente").value;

    let resultados = clientes.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (cliente) {
        console.log(cliente);
        let registro =
            '<tr onclick="moduloCliente.selectCliente(' + clientes.indexOf(cliente) + ');">' +
            '<td>' + cliente.nombre + '</td>' +
            '<td>' + cliente.primer_apellido + ' ' + cliente.segundo_apellido + '</td>' +
            '<td>' + cliente.genero + '</td>' +
            '<td>' + cliente.telefono_movil + '</td>' +
            '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}
