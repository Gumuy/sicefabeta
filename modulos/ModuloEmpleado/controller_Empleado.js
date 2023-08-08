

let indexempleadoseleccionado;
let empleados = [];
let numEmpleados = 0;



export function addEmpleado() {


    Swal.fire(
        'Empleado agregado',
        'El empleado ha sido agregado con éxito',
        'success'
    )



    numEmpleados++
    let id_empleado, nombre,
        telefono,
        apellido_paterno,
        apellido_materno,
        genero,
        fecha_nacimiento,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        sueldo,
        puesto,
        curp,
        fechaIngreso,
        rfc,
        usuario, contrasenia



    nombre = document.getElementById("txtNombre").value;

    apellido_paterno = document.getElementById("txtPa").value;
    apellido_materno = document.getElementById("txtPm").value;
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento = document.getElementById("txtFechNac").value;
    domicilio = document.getElementById("txtDomicilio").value;
    rfc = document.getElementById("txtRFC").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPos").value;
    sueldo = document.getElementById("txtSalario").value;
    puesto = document.getElementById("txtPuesto").value;
    curp = document.getElementById("txtCurp").value;
    telefono = document.getElementById("txtTel").value;
    fechaIngreso = document.getElementById("dateFechaIngreso").value;
    let cod_empleado = generateEmployeeId(fechaIngreso, numEmpleados);
    usuario = puesto == "gerente" ? cod_empleado + "ADMS" : cod_empleado + "EMPS";
    contrasenia = puesto == "gerente" ? cod_empleado + "ADMS" : cod_empleado + "EMPS";

    console.log(usuario);
    console.log(contrasenia);


    let empleado = {};
    empleado.nombre = nombre;
    empleado.apellido_paterno = apellido_paterno;
    empleado.apellido_materno = apellido_materno;
    empleado.genero = genero;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.domicilio = domicilio;
    empleado.rfc = rfc;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.codigo_postal = codigo_postal;
    empleado.sueldo = sueldo;
    empleado.puesto = puesto;
    empleado.curp = curp;
    empleado.telefono = telefono;
    empleado.imagen = "URLiMAGEN";
    empleado.estatus = "Activo";

    empleado.fechaIngreso = fechaIngreso
    empleado.id_empleado = cod_empleado;
    empleado.ususario = usuario;
    empleado.contrasenia = contrasenia;

    console.log(empleado);
    empleados.push(empleado);

    clean();
    loadTabla();
}

function generateEmployeeId(fechaingreso, consecutivo) {
    let fechaIngreso = new Date(fechaingreso)
    let year = fechaIngreso.getFullYear();
    let month = fechaIngreso.getMonth() + 1;
    let idEmpleado = `${year.toString().slice(-2)}${month.toString().padStart(2, '0')}${consecutivo}`;
    return idEmpleado;
}

export function loadTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        console.log(empleado)
        let registro =
            '<tr onclick="moduloEmpleado.selectempleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>' + empleado.id_empleado + '</td>' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + '</td>' +
            '<td>' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.fecha_nacimiento + '</td>' +
            '<td>' + empleado.domicilio + '</td>' +
            '<td>' + empleado.rfc + '</td>' +
            '<td>' + empleado.ciudad + '</td>' +
            '<td>' + empleado.estado + '</td>' +
            '<td>' + empleado.codigo_postal + '</td>' +
            '<td>' + empleado.sueldo + '</td>' +
            '<td>' + empleado.puesto + '</td>' +
            '<td>' + empleado.fechaIngreso + '</td>' +
            '<td>' + empleado.curp + '</td>' +
            '<td>' + empleado.estatus + '</td>' +
            '<td>' + empleado.imagen + '</td>' +
            '</tr>';


        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("idContenidoTabla").innerHTML = cuerpo;

}

export function selectempleado(index) {
    console.log(index);
    document.getElementById("txtNombre").value = empleados[index].nombre;
    document.getElementById("txtPa").value = empleados[index].apellido_paterno;
    document.getElementById("txtPm").value = empleados[index].apellido_materno;
    document.getElementById("txtGenero").value = empleados[index].genero;
    document.getElementById("txtFechNac").value = empleados[index].fecha_nacimiento;
    document.getElementById("txtDomicilio").value = empleados[index].domicilio;
    document.getElementById("txtRFC").value = empleados[index].rfc;
    document.getElementById("txtCiudad").value = empleados[index].ciudad;
    document.getElementById("txtEstado").value = empleados[index].estado;
    document.getElementById("txtCodigoPos").value = empleados[index].codigo_postal;
    document.getElementById("txtSalario").value = empleados[index].sueldo;
    document.getElementById("txtPuesto").value = empleados[index].puesto;
    document.getElementById("txtCurp").value = empleados[index].curp;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexempleadoseleccionado = index;
}


export function clean() {

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtPa").value = "";
    document.getElementById("txtPm").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFechNac").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtCodigoPos").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtCurp").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexempleadoseleccionado = 0;
}

export function updateempleado() {
    console.log("ejecutando");

    let nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        fecha_nacimiento,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        sueldo,
        puesto,
        curp,
        rfc

    nombre = document.getElementById("txtNombre").value;
    console.log(nombre);
    apellido_paterno = document.getElementById("txtPa").value;
    apellido_materno = document.getElementById("txtPm").value;
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento = document.getElementById("txtFechNac").value;
    domicilio = document.getElementById("txtDomicilio").value;
    rfc = document.getElementById("txtRFC").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPos").value;
    sueldo = document.getElementById("txtSalario").value;
    puesto = document.getElementById("txtPuesto").value;
    curp = document.getElementById("txtCurp").value;


    let empleado = {};
    empleado.id_empleado = empleados[indexempleadoseleccionado].id_empleado;
    empleado.nombre = nombre;
    empleado.apellido_paterno = apellido_paterno;
    empleado.apellido_materno = apellido_materno;
    empleado.genero = genero;
    empleado.fecha_nacimiento = fecha_nacimiento;
    empleado.domicilio = domicilio;
    empleado.rfc = rfc;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.codigo_postal = codigo_postal;
    empleado.sueldo = sueldo;
    empleado.puesto = puesto;
    empleado.curp = curp;
    empleado.imagen = "urlImagen";
    empleado.estatus = "Activo";
    empleados[indexempleadoseleccionado] = empleado;
    clean();
    loadTabla();
    Swal.fire(
        'Empleado actualizado',
        'El empleado ha sido actualizado con éxito',
        'success'
    )


}


export function deleteempleado() {

    empleados[indexempleadoseleccionado].estatus = "Inactivo";
    clean();
    loadTabla();

    Swal.fire(
        'Empleado eliminado',
        'El empleado ha sido eliminado con éxito',
        'success'
    )
}

fetch("/modulos/ModuloEmpleado/data_Empleado.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        empleados = jsondata;
        console.log(empleados);
        loadTabla();
    }
    );



export function searchempleado() {
    let filtro = document.getElementById("txtBusquedaempleado").value;

    let resultados = empleados.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (empleado) {
        let registro =
            '<tr onclick="moduloEmpleado.selectempleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>' + empleado.id_empleado + '</td>' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + '</td>' +
            '<td>' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.fecha_nacimiento + '</td>' +
            '<td>' + empleado.domicilio + '</td>' +
            '<td>' + empleado.rfc + '</td>' +
            '<td>' + empleado.ciudad + '</td>' +
            '<td>' + empleado.estado + '</td>' +
            '<td>' + empleado.codigo_postal + '</td>' +
            '<td>' + empleado.sueldo + '</td>' +
            '<td>' + empleado.puesto + '</td>' +
            '<td>' + empleado.fechaIngreso + '</td>' +
            '<td>' + empleado.curp + '</td>' +
            '<td>' + empleado.estatus + '</td>' +
            '<td>' + empleado.imagen + '</td>' +
            '</tr>';
    });
    console.log(cuerpo);
    document.getElementById("idContenidoTabla").innerHTML = cuerpo;
}

