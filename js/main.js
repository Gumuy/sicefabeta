let moduloEmpleado;
let moduloSucursales;
let moduloPedidos;
let moduloProductos;
let moduloCliente;
let moduloVentas;

function cargarModuloEmpleados() {
    fetch("../modulos/ModuloEmpleado/viewEmpleado.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/ModuloEmpleado/controller_Empleado.js").then(
                    function (controller) {
                        moduloEmpleado = controller;
                    }
                );
            }
        );
}


function cargarModuloSucursales() {
    fetch("../modulos/moduloSucursales/viewSucursales.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/ModuloSucursales/controller_Sucursales.js").then(
                    function (controller) {
                        moduloSucursales = controller;
                    }
                );
            }
        );
}


function cargarModuloPedidosSucursal() {
    fetch("../modulos/ModuloPedidos/viewPedidosSucursal.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/ModuloPedidos/controller_pedido.js").then(
                    function (controller) {
                        moduloPedidos = controller;
                    }
                );
            }
        );
}

function cargarModuloPedidosCentral() {
    fetch("../modulos/ModuloPedidos/viewPedidosCentral.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/ModuloPedidos/controller_pedido.js").then(
                    function (controller) {
                        moduloPedidos = controller;
                    }
                );
            }
        );
}

function cargarModuloProductos() {
    fetch("../modulos/moduloProductos/viewProductos.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/moduloProductos/controllerProductos.js").then(
                    function (controller) {
                        moduloProductos = controller;
                    }
                );
            }
        );
}



function cargarModuloClientes() {
    fetch("/modulos/moduloClientes/view_Clientes.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/moduloClientes/controller_Cliente.js").then(
                    function (controller) {
                        moduloCliente = controller;
                    }
                );
            }
        );
}

function cargarModuloVenta() {
    fetch("/modulos/ModuloVenta/viewVentas.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../modulos/ModuloVenta/controllerVentas.js").then(
                    function (controller) {
                        moduloVentas = controller;
                    }
                );
            }
        );
}
