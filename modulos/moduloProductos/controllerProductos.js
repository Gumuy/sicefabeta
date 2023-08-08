let indexProductoSeleccionado;
let Productos = [];

let idProducto,
    nombre,
    nombreGenerico,
    formaFarmaceutica,
    unidadMedida,
    presentacion,
    principalIndicacion,
    contraindicaciones,
    concentracion,
    unidadesEnvase,
    precioCompra,
    precioVenta,
    foto,
    rutaFoto,
    codigoBarras,
    estatus;
export function addProducto() {
    nombre = document.getElementById("txtNombre").value;
    nombreGenerico = document.getElementById("txtNomGen").value;
    formaFarmaceutica = document.getElementById("txtFormaF").value;
    unidadMedida = document.getElementById("txtUniMed").value;
    presentacion = document.getElementById("txtPres").value;
    principalIndicacion = document.getElementById("txtPrinIndi").value;
    contraindicaciones = document.getElementById("txtContra").value;
    concentracion = document.getElementById("txtConcen").value;
    unidadesEnvase = document.getElementById("txtUniEnv").value;
    precioCompra = document.getElementById("txtPrecioCom").value;
    precioVenta = document.getElementById("txtPrecioVen").value;
    foto = "";
    rutaFoto = "";
    codigoBarras = document.getElementById("txtCodBar").value;

    let producto = {};
    producto.idProducto = Productos.length + 1;
    producto.nombre = nombre;
    producto.nombreGenerico = nombreGenerico;
    producto.formaFarmaceutica = formaFarmaceutica;
    producto.unidadMedida = unidadMedida;
    producto.presentacion = presentacion;
    producto.principalIndicacion = principalIndicacion;
    producto.contraindicaciones = contraindicaciones;
    producto.concentracion = concentracion;
    producto.unidadesEnvase = unidadesEnvase;
    producto.precioCompra = precioCompra;
    producto.precioVenta = precioVenta;
    producto.foto = foto;
    producto.rutaFoto = rutaFoto;
    producto.codigoBarras = codigoBarras;
    producto.estatus = "Activo";
    Productos.push(producto);
    clean();
    loadTabla();
    Swal.fire(
        '¡¡Hecho!!',
        'Registro guardado',
        'success'
      );
}

export function loadTabla() {
    let cuerpo = "";
    Productos.forEach(function (producto) {
        let resgistro =
            '<tr onclick="moduloProductos.selectProducto(' + Productos.indexOf(producto) + ');">' +
            '<td>' + producto.idProducto + '</td>' +
            '<td>' + producto.nombre + '</td>' +
            
            '<td>' + producto.formaFarmaceutica + '</td>' +
            
            '<td>' + producto.presentacion + '</td>' +
           
            '<td>' + producto.concentracion + '</td>' +
            '<td>' + producto.unidadesEnvase + '</td>' +
            '<td>' + producto.precioCompra + '</td>' +
            '<td>' + producto.precioVenta + '</td>' +
            '<td>' + producto.rutaFoto + '</td>' +
            
            '<td>' + producto.estatus + '</td></tr>';
        cuerpo += resgistro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;

}

export function selectProducto(index) {

    nombre = document.getElementById("txtNombre").value = Productos[index].nombre;
    nombreGenerico = document.getElementById("txtNomGen").value = Productos[index].nombreGenerico;
    formaFarmaceutica = document.getElementById("txtFormaF").value = Productos[index].formaFarmaceutica;
    unidadMedida = document.getElementById("txtUniMed").value = Productos[index].unidadMedida;
    presentacion = document.getElementById("txtPres").value = Productos[index].presentacion;
    principalIndicacion = document.getElementById("txtPrinIndi").value = Productos[index].principalIndicacion;
    contraindicaciones = document.getElementById("txtContra").value = Productos[index].contraindicaciones;
    concentracion = document.getElementById("txtConcen").value = Productos[index].concentracion;
    unidadesEnvase = document.getElementById("txtUniEnv").value = Productos[index].unidadesEnvase;
    precioCompra = document.getElementById("txtPrecioCom").value = Productos[index].precioCompra;
    precioVenta = document.getElementById("txtPrecioVen").value = Productos[index].precioVenta;
    foto = "";
    rutaFoto = "";
    codigoBarras = document.getElementById("txtCodBar").value = Productos[index].codigoBarras;
    estatus = Productos[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductoSeleccionado = index;
}

export function clean() {
    nombre = document.getElementById("txtNombre").value = "";
    nombreGenerico = document.getElementById("txtNomGen").value = "";
    formaFarmaceutica = document.getElementById("txtFormaF").value = "";
    unidadMedida = document.getElementById("txtUniMed").value = "";
    presentacion = document.getElementById("txtPres").value = "";
    principalIndicacion = document.getElementById("txtPrinIndi").value = "";
    contraindicaciones = document.getElementById("txtContra").value = "";
    concentracion = document.getElementById("txtConcen").value = "";
    unidadesEnvase = document.getElementById("txtUniEnv").value = "";
    precioCompra = document.getElementById("txtPrecioCom").value = "";
    precioVenta = document.getElementById("txtPrecioVen").value = "";
    foto = "";
    rutaFoto = "";
    codigoBarras = document.getElementById("txtCodBar").value = "";
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

export function updateProducto() {
    let idProducto,
        nombre,
        nombreGenerico,
        formaFarmaceutica,
        unidadMedida,
        presentacion,
        principalIndicacion,
        contraindicaciones,
        concentracion,
        unidadesEnvase,
        precioCompra,
        precioVenta,
        foto,
        rutaFoto,
        codigoBarras,
        estatus;

    nombre = document.getElementById("txtNombre").value;
    nombreGenerico = document.getElementById("txtNomGen").value;
    formaFarmaceutica = document.getElementById("txtFormaF").value;
    unidadMedida = document.getElementById("txtUniMed").value;
    presentacion = document.getElementById("txtPres").value;
    principalIndicacion = document.getElementById("txtPrinIndi").value;
    contraindicaciones = document.getElementById("txtContra").value;
    concentracion = document.getElementById("txtConcen").value;
    unidadesEnvase = document.getElementById("txtUniEnv").value;
    precioCompra = document.getElementById("txtPrecioCom").value;
    precioVenta = document.getElementById("txtPrecioVen").value;
    foto = "";
    rutaFoto = "";
    codigoBarras = document.getElementById("txtCodBar").value;
    estatus = "Activo";

    let producto = {};
    producto.idProducto = indexProductoSeleccionado;
    producto.nombre = nombre;
    producto.nombreGenerico = nombreGenerico;
    producto.formaFarmaceutica = formaFarmaceutica;
    producto.unidadMedida = unidadMedida;
    producto.presentacion = presentacion;
    producto.principalIndicacion = principalIndicacion;
    producto.contraindicaciones = contraindicaciones;
    producto.concentracion = concentracion;
    producto.unidadesEnvase = unidadesEnvase;
    producto.precioCompra = precioCompra;
    producto.precioVenta = precioVenta;
    producto.foto = foto;
    producto.rutaFoto = rutaFoto;
    producto.codigoBarras = codigoBarras;
    producto.estatus = estatus;

    Productos[indexProductoSeleccionado] = producto;
    clean();
    loadTabla();
    Swal.fire(
        '¡¡Hecho!!',
        'Registro guardado',
        'success'
      );
}

export function deleteProducto() {
    Productos[indexProductoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
    Swal.fire(
        '¡¡Listo!!',
        'Registro eliminado',
        'warning'
      );
}

fetch("/modulos/moduloProductos/dataProductos.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsondata) {
        Productos = jsondata;
        console.log(Productos);
        loadTabla();
    }
    );


export function searchProducto() {
    let filtro = document.getElementById("txtBusquedaProducto").value;
    let resultados = Productos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (producto) {
        let resgistro =
            '<tr onclick="moduloProductos.selectProducto(' + Productos.indexOf(producto) + ');"' +
            '<td>' + producto.idProducto + '<td>' +
            '<td>' + producto.nombre + '<td>' +
            '<td>' + producto.nombreGenerico + '<td>' +
            '<td>' + producto.formaFarmaceutica + '<td>' +
            '<td>' + producto.unidadMedida + '<td>' +
            '<td>' + producto.presentacion + '<td>' +
            '<td>' + producto.principalIndicacion + '<td>' +
            '<td>' + producto.contraindicaciones + '<td>' +
            '<td>' + producto.concentracion + '<td>' +
            '<td>' + producto.unidadesEnvase + '<td>' +
            '<td>' + producto.precioCompra + '<td>' +
            '<td>' + producto.precioVenta + '<td>' +
            '<td>' + producto.rutaFoto + '<td>' +
            '<td>' + producto.codigoBarras + '<td>' +
            '<td>' + producto.estatus + '<td></tr>';
        cuerpo += resgistro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

/*
//funcion para mostrar foto de los archivos
$(document).ready(function() {
    $("#imageInput").change(function() {
      readURL(this);
    });
  });
  
  function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
  
      reader.onload = function(e) {
        $("#previewImage").attr("src", e.target.result);
        $("#previewImage").show();
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function clearPreview() {
    $("#previewImage").attr("src", "");
    $("#previewImage").hide();
  }*/
