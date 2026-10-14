
"use strict";

// =============================================
// FALCORA MOTORS
// Catálogo, detalles, accesorios, carrito y pago
// Simulación educativa: no realiza cobros reales
// =============================================

// ------------------------------
// 1. CATÁLOGO DE MOTOCICLETAS
// ------------------------------

const motos = [
    // ESTÁNDAR
    {
        nombre: "Urban 150",
        categoria: "Estándar",
        precio: 42999,
        imagen: "imagenes/estandar/urban150.jpg",
        descripcion: "Motocicleta práctica para desplazamientos urbanos.",
        motor: "150 cc",
        velocidad: "95 km/h"
    },
    {
        nombre: "Classic 125",
        categoria: "Estándar",
        precio: 38999,
        imagen: "imagenes/estandar/classic125.jpg",
        descripcion: "Diseño clásico para recorridos cotidianos.",
        motor: "125 cc",
        velocidad: "85 km/h"
    },
    {
        nombre: "Metro 180",
        categoria: "Estándar",
        precio: 46999,
        imagen: "imagenes/estandar/metro180.jpg",
        descripcion: "Una opción urbana con potencia equilibrada.",
        motor: "180 cc",
        velocidad: "110 km/h"
    },
    {
        nombre: "Road 200",
        categoria: "Estándar",
        precio: 52999,
        imagen: "imagenes/estandar/road200.jpg",
        descripcion: "Comodidad y rendimiento para trayectos diarios.",
        motor: "200 cc",
        velocidad: "120 km/h"
    },

    // DOBLE PROPÓSITO
    {
        nombre: "Explorer 250",
        categoria: "Doble propósito",
        precio: 68999,
        imagen: "imagenes/doble-proposito/explorer250.jpg",
        descripcion: "Preparada para ciudad y caminos variados.",
        motor: "250 cc",
        velocidad: "125 km/h"
    },
    {
        nombre: "Adventure 200",
        categoria: "Doble propósito",
        precio: 59999,
        imagen: "imagenes/doble-proposito/adventure200.jpg",
        descripcion: "Versátil para recorridos urbanos y rurales.",
        motor: "200 cc",
        velocidad: "115 km/h"
    },
    {
        nombre: "Trail 250",
        categoria: "Doble propósito",
        precio: 69999,
        imagen: "imagenes/doble-proposito/trail250.jpg",
        descripcion: "Equilibrio entre comodidad y aventura.",
        motor: "250 cc",
        velocidad: "125 km/h"
    },
    {
        nombre: "Adventure 300",
        categoria: "Doble propósito",
        precio: 78999,
        imagen: "imagenes/doble-proposito/adventure300.jpg",
        descripcion: "Más potencia para trayectos largos y caminos difíciles.",
        motor: "300 cc",
        velocidad: "140 km/h"
    },

    // TODO TERRENO
    {
        nombre: "Enduro 300",
        categoria: "Todo terreno",
        precio: 74999,
        imagen: "imagenes/todo-terreno/enduro300.jpg",
        descripcion: "Diseñada para terrenos exigentes.",
        motor: "300 cc",
        velocidad: "135 km/h"
    },
    {
        nombre: "Enduro 200",
        categoria: "Todo terreno",
        precio: 62999,
        imagen: "imagenes/todo-terreno/enduro200.jpg",
        descripcion: "Ligera y versátil para caminos de tierra.",
        motor: "200 cc",
        velocidad: "115 km/h"
    },
    {
        nombre: "Enduro 250",
        categoria: "Todo terreno",
        precio: 71999,
        imagen: "imagenes/todo-terreno/enduro250.jpg",
        descripcion: "Rendimiento equilibrado fuera del asfalto.",
        motor: "250 cc",
        velocidad: "125 km/h"
    },
    {
        nombre: "X300",
        categoria: "Todo terreno",
        precio: 84999,
        imagen: "imagenes/todo-terreno/x300.jpg",
        descripcion: "Una motocicleta para aventuras exigentes.",
        motor: "300 cc",
        velocidad: "140 km/h"
    },

    // SEMI DEPORTIVAS
    {
        nombre: "Sport 250",
        categoria: "Semi deportivas",
        precio: 82999,
        imagen: "imagenes/semi-deportivas/sport250.jpg",
        descripcion: "Diseño deportivo con uso versátil.",
        motor: "250 cc",
        velocidad: "140 km/h"
    },
    {
        nombre: "Sport 150",
        categoria: "Semi deportivas",
        precio: 64999,
        imagen: "imagenes/semi-deportivas/sport150.jpg",
        descripcion: "Estilo deportivo para el uso diario.",
        motor: "150 cc",
        velocidad: "115 km/h"
    },
    {
        nombre: "Sport 200",
        categoria: "Semi deportivas",
        precio: 74999,
        imagen: "imagenes/semi-deportivas/sport200.jpg",
        descripcion: "Agilidad urbana con apariencia deportiva.",
        motor: "200 cc",
        velocidad: "130 km/h"
    },
    {
        nombre: "RS 300",
        categoria: "Semi deportivas",
        precio: 89999,
        imagen: "imagenes/semi-deportivas/rs300.jpg",
        descripcion: "Una propuesta deportiva con mayor cilindrada.",
        motor: "300 cc",
        velocidad: "150 km/h"
    },

    // DEPORTIVAS
    {
        nombre: "R500",
        categoria: "Deportivas",
        precio: 149999,
        imagen: "imagenes/deportivas/r500.jpg",
        descripcion: "Diseño deportivo para quienes buscan potencia.",
        motor: "500 cc",
        velocidad: "180 km/h"
    },
    {
        nombre: "R250",
        categoria: "Deportivas",
        precio: 94999,
        imagen: "imagenes/deportivas/r250.jpg",
        descripcion: "Estética deportiva y manejo dinámico.",
        motor: "250 cc",
        velocidad: "145 km/h"
    },
    {
        nombre: "R400",
        categoria: "Deportivas",
        precio: 124999,
        imagen: "imagenes/deportivas/r400.jpg",
        descripcion: "Potencia y diseño para recorridos deportivos.",
        motor: "400 cc",
        velocidad: "170 km/h"
    },
    {
        nombre: "R650",
        categoria: "Deportivas",
        precio: 179999,
        imagen: "imagenes/deportivas/r650.jpg",
        descripcion: "Una deportiva de gran cilindrada.",
        motor: "650 cc",
        velocidad: "200 km/h"
    },

    // SÚPER DEPORTIVAS

    {
        nombre: "RS 400",
        categoria: "Súper deportivas",
        precio: 104999,
        imagen: "imagenes/super-deportivas/rs400.jpg",
        descripcion: "Líneas deportivas y rendimiento dinámico.",
        motor: "400 cc",
        velocidad: "170 km/h"
    },
    {
        nombre: "Nomad 400",
        categoria: "Súper deportivas",
        precio: 94999,
        imagen: "imagenes/super-deportivas/nomad400.jpg",
        descripcion: "Estilo deportivo con personalidad propia.",
        motor: "400 cc",
        velocidad: "165 km/h"
    },
    {
        nombre: "Extreme 450",
        categoria: "Súper deportivas",
        precio: 109999,
        imagen: "imagenes/super-deportivas/extreme450.jpg",
        descripcion: "Diseño agresivo y motor de 450 cc.",
        motor: "450 cc",
        velocidad: "180 km/h"
    },
    {
        nombre: "R1000",
        categoria: "Súper deportivas",
        precio: 239999,
        imagen: "imagenes/super-deportivas/r1000.jpg",
        descripcion: "El modelo insignia de la gama Falcora.",
        motor: "1000 cc",
        velocidad: "280 km/h"
    }
];

// ------------------------------
// 2. ACCESORIOS OPCIONALES
// ------------------------------

const accesoriosDisponibles = [
    {
        nombre: "Casco Falcora",
        precio: 1200,
        imagen: "imagenes/accesorios/casco.jpg"
    },
    {
        nombre: "Guantes deportivos",
        precio: 500,
        imagen: "imagenes/accesorios/guantes.jpg"
    },
    {
        nombre: "Maletero trasero",
        precio: 1800,
        imagen: "imagenes/accesorios/maletero.jpg"
    }
];

let carrito = [];
let motoSeleccionada = null;

// ------------------------------
// 3. FUNCIONES GENERALES
// ------------------------------

function formatoPrecio(precio) {
    return precio.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0
    });
}

function obtenerElemento(id) {
    return document.getElementById(id);
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, function (caracter) {
        const equivalencias = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return equivalencias[caracter];
    });
}

function mostrarNotificacion(mensaje) {
    let aviso = obtenerElemento("notificacionFalcora");

    if (!aviso) {
        aviso = document.createElement("div");
        aviso.id = "notificacionFalcora";
        aviso.style.cssText =
            "position:fixed;bottom:20px;right:20px;" +
            "z-index:99999;background:#e10600;color:white;" +
            "padding:14px 20px;border-radius:8px;" +
            "font-weight:bold;box-shadow:0 4px 15px #0008;";

        document.body.appendChild(aviso);
    }

    aviso.textContent = mensaje;
    aviso.style.display = "block";

    clearTimeout(aviso._temporizador);

    aviso._temporizador = setTimeout(function () {
        aviso.style.display = "none";
    }, 2500);
}

// ------------------------------
// 4. MOSTRAR LAS MOTOCICLETAS
// ------------------------------

function mostrarMotos() {
    const contenedor = obtenerElemento("productos");

    if (!contenedor) {
        console.error(
            'Falcora Motors: no existe un elemento con id="productos" en index.html.'
        );
        return;
    }

    const buscador = obtenerElemento("buscador");
    const busqueda = buscador
        ? buscador.value.trim().toLowerCase()
        : "";

    const categorias = [
        "Estándar",
        "Doble propósito",
        "Todo terreno",
        "Semi deportivas",
        "Deportivas",
        "Súper deportivas"
    ];

    const idsCategorias = {
        "Estándar": "estandar",
        "Doble propósito": "doble",
        "Todo terreno": "terreno",
        "Semi deportivas": "semi",
        "Deportivas": "deportivas",
        "Súper deportivas": "super-deportivas"
    };

    let html = "";

    categorias.forEach(function (categoria) {
        const motosCategoria = motos.filter(function (moto) {
            const coincideCategoria = moto.categoria === categoria;

            const coincideBusqueda =
                moto.nombre.toLowerCase().includes(busqueda) ||
                moto.categoria.toLowerCase().includes(busqueda) ||
                moto.descripcion.toLowerCase().includes(busqueda);

            return coincideCategoria && coincideBusqueda;
        });

        if (motosCategoria.length === 0) {
            return;
        }

        html += `
            <section class="seccion-categoria"
                     id="${idsCategorias[categoria]}">

                <h2 class="titulo-categoria">
                    ${escaparHTML(categoria)}
                </h2>

                <div class="productos productos-categoria">
        `;

        motosCategoria.forEach(function (moto) {
            const indice = motos.indexOf(moto);

            html += `
                <article class="producto tarjeta-moto">

                    <img
                        src="${escaparHTML(moto.imagen)}"
                        alt="${escaparHTML(moto.nombre)}"
                        loading="lazy"
                        onerror="this.onerror=null;this.style.display='none';"                    >

                    <div class="producto-info">
                        <h3>${escaparHTML(moto.nombre)}</h3>

                        <p class="categoria-moto">
                            ${escaparHTML(moto.categoria)}
                        </p>

                        <p class="precio">
                            ${formatoPrecio(moto.precio)}
                        </p>

                        <button
                            type="button"
                            class="boton"
                            onclick="verDetalles(${indice})">
                            Ver detalles
                        </button>

                        <button
                            type="button"
                            class="boton"
                            onclick="agregarCarrito(${indice})">
                            Agregar al carrito
                        </button>
                    </div>

                </article>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    if (html === "") {
        html = `
            <p class="sin-resultados">
                No se encontraron motocicletas.
                Prueba con otro nombre o categoría.
            </p>
        `;
    }

    contenedor.innerHTML = html;
}

// ------------------------------
// 5. DETALLES Y CONFIGURACIÓN
// ------------------------------

function verDetalles(indice) {
    const moto = motos[indice];

    if (!moto) {
        return;
    }

    motoSeleccionada = moto;

    const modal = obtenerElemento("modalDetalles");
    const contenido = obtenerElemento("contenidoDetalles");

    if (!modal || !contenido) {
        mostrarNotificacion(
            "No se encontró el modal de detalles en index.html."
        );
        return;
    }

    let html = `
        <div class="detalle-moto">

            <img
                src="${escaparHTML(moto.imagen)}"
                alt="${escaparHTML(moto.nombre)}"
                class="imagen-detalle"
                onerror="this.onerror=null;this.src='imagenes/portada.jpg';"
            >

            <h2>${escaparHTML(moto.nombre)}</h2>

            <p>${escaparHTML(moto.descripcion)}</p>

            <p><strong>Categoría:</strong>
                ${escaparHTML(moto.categoria)}
            </p>

            <p><strong>Motor:</strong>
                ${escaparHTML(moto.motor)}
            </p>

            <p><strong>Velocidad estimada:</strong>
                ${escaparHTML(moto.velocidad)}
            </p>

            <h3 class="precio">${formatoPrecio(moto.precio)}</h3>

            <h3>Elige el color</h3>

            <label>
                <input type="radio" name="colorMoto"
                       value="Negro mate" checked>
                Negro mate
            </label>

            <label>
                <input type="radio" name="colorMoto"
                       value="Rojo deportivo">
                Rojo deportivo
            </label>

            <label>
                <input type="radio" name="colorMoto"
                       value="Gris metálico">
                Gris metálico
            </label>

            <h3>Accesorios opcionales</h3>

            <p>Marca únicamente los accesorios que deseas agregar.</p>

            <div class="accesorios-configuracion">
    `;

    accesoriosDisponibles.forEach(function (accesorio, indiceAccesorio) {
        html += `
            <label class="accesorio-opcion">

                <input
                    type="checkbox"
                    class="accesorio-checkbox"
                    value="${indiceAccesorio}"
                >

                <img
                    src="${escaparHTML(accesorio.imagen)}"
                    alt="${escaparHTML(accesorio.nombre)}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

                <span>
                    <strong>${escaparHTML(accesorio.nombre)}</strong>
                    <br>
                    ${formatoPrecio(accesorio.precio)}
                </span>

            </label>
        `;
    });

    html += `
            </div>

            <button
                type="button"
                class="boton ancho"
                onclick="agregarConfigurada()">
                Agregar configuración al carrito
            </button>

        </div>
    `;

    contenido.innerHTML = html;
    modal.classList.remove("oculto");
    modal.style.display = "flex";
}

function agregarConfigurada() {
    if (!motoSeleccionada) {
        mostrarNotificacion("Primero selecciona una motocicleta.");
        return;
    }

    const colorElegido = document.querySelector(
        'input[name="colorMoto"]:checked'
    );

    const accesoriosElegidos = [];

    document.querySelectorAll(
        ".accesorio-checkbox:checked"
    ).forEach(function (checkbox) {
        const accesorio =
            accesoriosDisponibles[Number(checkbox.value)];

        if (accesorio) {
            accesoriosElegidos.push({
                nombre: accesorio.nombre,
                precio: accesorio.precio
            });
        }
    });

    carrito.push({
        nombre: motoSeleccionada.nombre,
        precio: motoSeleccionada.precio,
        imagen: motoSeleccionada.imagen,
        color: colorElegido ? colorElegido.value : "Negro mate",
        accesorios: accesoriosElegidos
    });

    cerrarDetalles();
    actualizarCarrito();
    mostrarNotificacion("Motocicleta agregada al carrito.");
}

function cerrarDetalles() {
    const modal = obtenerElemento("modalDetalles");

    if (modal) {
        modal.classList.add("oculto");
        modal.style.display = "none";
    }

    motoSeleccionada = null;
}

// ------------------------------
// 6. CARRITO
// ------------------------------

function agregarCarrito(indice) {
    const moto = motos[indice];

    if (!moto) {
        return;
    }

    carrito.push({
        nombre: moto.nombre,
        precio: moto.precio,
        imagen: moto.imagen,
        color: "Negro mate",
        accesorios: []
    });

    actualizarCarrito();
    mostrarNotificacion("Motocicleta agregada al carrito.");
}

function calcularTotal() {
    return carrito.reduce(function (total, item) {
        const totalAccesorios = (item.accesorios || []).reduce(
            function (suma, accesorio) {
                return suma + accesorio.precio;
            },
            0
        );

        return total + item.precio + totalAccesorios;
    }, 0);
}

function actualizarCarrito() {
    const contador = obtenerElemento("contador");

    if (contador) {
        contador.textContent = carrito.length;
    }

    const checkoutTotal = obtenerElemento("checkoutTotal");

    if (checkoutTotal) {
        checkoutTotal.textContent = formatoPrecio(calcularTotal());
    }

    mostrarCarrito();
}

function mostrarCarrito() {
    const contenido =
        obtenerElemento("contenidoCarrito") ||
        obtenerElemento("listaCarrito");

    const totalElemento =
        obtenerElemento("totalCarrito") ||
        obtenerElemento("total");

    if (contenido) {
        if (carrito.length === 0) {
            contenido.innerHTML = `
                <p>Tu carrito está vacío.</p>
            `;
        } else {
            let html = "";

            carrito.forEach(function (item, indice) {
                html += `
                    <div class="item-carrito">

                        <h3>${escaparHTML(item.nombre)}</h3>

                        <p>Color: ${escaparHTML(item.color || "Negro mate")}</p>

                        <p>Motocicleta: ${formatoPrecio(item.precio)}</p>
                `;

                if (item.accesorios && item.accesorios.length > 0) {
                    html += `<p><strong>Accesorios:</strong></p><ul>`;

                    item.accesorios.forEach(function (accesorio) {
                        html += `
                            <li>
                                ${escaparHTML(accesorio.nombre)}:
                                ${formatoPrecio(accesorio.precio)}
                            </li>
                        `;
                    });

                    html += `</ul>`;
                } else {
                    html += `<p>Sin accesorios adicionales.</p>`;
                }

                const subtotal = item.precio +
                    (item.accesorios || []).reduce(function (suma, accesorio) {
                        return suma + accesorio.precio;
                    }, 0);

                html += `
                        <p><strong>Subtotal:
                            ${formatoPrecio(subtotal)}
                        </strong></p>

                        <button
                            type="button"
                            class="boton"
                            onclick="eliminarDelCarrito(${indice})">
                            Quitar del carrito
                        </button>

                    </div>
                    <hr>
                `;
            });

            contenido.innerHTML = html;
        }
    }

    if (totalElemento) {
        totalElemento.textContent = formatoPrecio(calcularTotal());
    }
}

function eliminarDelCarrito(indice) {
    if (indice < 0 || indice >= carrito.length) {
        return;
    }

    carrito.splice(indice, 1);
    actualizarCarrito();
    mostrarNotificacion("Producto eliminado del carrito.");
}


function abrirCarrito() {
    const modal = document.getElementById("modalCarrito");

    if (!modal) {
        alert("Error: no se encontró el modal del carrito.");
        return;
    }

    modal.classList.remove("oculto");
    modal.style.display = "flex";

    if (typeof mostrarCarrito === "function") {
        mostrarCarrito();
    } else {
        alert("Error: no se encontró la función mostrarCarrito().");
    }
}


function cerrarCarrito() {
    const modal = obtenerElemento("modalCarrito");

    if (modal) {
        modal.classList.add("oculto");
        modal.style.display = "none";
    }
}

// ------------------------------
// 7. SIMULACIÓN DE PAGO
// ------------------------------

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega una motocicleta primero.");
        return;
    }

    const total = obtenerElemento("checkoutTotal");

    if (total) {
        total.textContent = formatoPrecio(calcularTotal());
    }

    const resultado = obtenerElemento("resultadoCheckout");

    if (resultado) {
        resultado.classList.add("oculto");
        resultado.innerHTML = "";
    }

    cerrarCarrito();

    const modal = obtenerElemento("modalCheckout");

    if (modal) {
        modal.classList.remove("oculto");
        modal.style.display = "flex";
    }

    actualizarMetodoPago();
}

function actualizarMetodoPago() {
    const metodo = obtenerElemento("metodoPago");

    if (!metodo) {
        return;
    }

    const mostrarTarjeta = metodo.value === "tarjeta";

    const opcionesTarjeta = obtenerElemento("opcionesTarjeta");
    const datosTarjeta = obtenerElemento("datosTarjeta");

    [opcionesTarjeta, datosTarjeta].forEach(function (elemento) {
        if (!elemento) {
            return;
        }

        elemento.classList.toggle("oculto", !mostrarTarjeta);
        elemento.style.display = mostrarTarjeta ? "" : "none";
    });

    const mensaje = obtenerElemento("mensajeTarjeta");

    if (mensaje) {
        mensaje.textContent =
            "Simulación educativa: utiliza datos ficticios. No introduzcas datos bancarios reales.";
    }
}

function validarTarjetaSimulada() {
    const numero = obtenerElemento("numeroTarjeta");
    const titular = obtenerElemento("titularTarjeta");
    const vencimiento = obtenerElemento("vencimientoTarjeta");
    const cvv = obtenerElemento("cvvTarjeta");

    // Si no existe el formulario de tarjeta, no bloqueamos
    // la simulación. El HTML puede utilizar otro diseño.
    if (!numero || !titular || !vencimiento || !cvv) {
        return true;
    }

    const numeroLimpio = numero.value.replace(/\s|-/g, "");
    const titularTexto = titular.value.trim();
    const vencimientoTexto = vencimiento.value.trim();
    const cvvTexto = cvv.value.trim();

    if (!/^\d{16}$/.test(numeroLimpio)) {
        alert("Para la demostración, introduce un número ficticio de 16 dígitos.");
        numero.focus();
        return false;
    }

    if (titularTexto.length < 2) {
        alert("Introduce un nombre ficticio para la simulación.");
        titular.focus();
        return false;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(vencimientoTexto)) {
        alert("Escribe un vencimiento ficticio en formato MM/AA.");
        vencimiento.focus();
        return false;
    }

    if (!/^\d{3,4}$/.test(cvvTexto)) {
        alert("Introduce un código ficticio de 3 o 4 dígitos.");
        cvv.focus();
        return false;
    }

    return true;
}

function validarDatosPago() {
    const metodo = obtenerElemento("metodoPago");

    if (!metodo) {
        alert("No se encontró el selector de método de pago en index.html.");
        return false;
    }

    if (metodo.value === "tarjeta") {
        return validarTarjetaSimulada();
    }

    return true;
}

function confirmarSimulacion() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }

    if (!validarDatosPago()) {
        return;
    }

    const metodoElemento = obtenerElemento("metodoPago");
    const metodo = metodoElemento ? metodoElemento.value : "digital";

    let pago;

    if (metodo === "tarjeta") {
        const tipo = obtenerElemento("tipoTarjeta");
        const marca = obtenerElemento("marcaTarjeta");

        pago =
            (tipo ? tipo.value : "Tarjeta") +
            " " +
            (marca ? marca.value : "");
    } else if (metodo === "transferencia") {
        pago = "Transferencia bancaria simulada";
    } else {
        pago = "Billetera digital simulada";
    }

    const resultado = obtenerElemento("resultadoCheckout");

    if (!resultado) {
        alert(
            "Falta el elemento con id='resultadoCheckout' en index.html."
        );
        return;
    }

    const numeroPedido = "FM-DEMO-" +
        Math.floor(100000 + Math.random() * 900000);

    resultado.innerHTML = `
        <div class="resultado-simulacion">

            <h3>¡Simulación completada!</h3>

            <p><strong>Pedido:</strong> ${numeroPedido}</p>

            <p><strong>Método:</strong> ${escaparHTML(pago)}</p>

            <p><strong>Total simulado:</strong>
                ${formatoPrecio(calcularTotal())}
            </p>

            <p>
                Esta operación es únicamente educativa.
                No se realizó ningún cobro real.
            </p>

            <button
                type="button"
                class="boton ancho"
                onclick="terminarSimulacion()">
                Terminar
            </button>

        </div>
    `;

    resultado.classList.remove("oculto");
    resultado.style.display = "block";
}

function terminarSimulacion() {
    carrito = [];
    actualizarCarrito();

    const resultado = obtenerElemento("resultadoCheckout");

    if (resultado) {
        resultado.innerHTML = "";
        resultado.classList.add("oculto");
    }

    cerrarCheckout();
    mostrarNotificacion("Simulación finalizada.");
}

function cerrarCheckout() {
    const modal = obtenerElemento("modalCheckout");

    if (modal) {
        modal.classList.add("oculto");
        modal.style.display = "none";
    }
}

// ------------------------------
// 8. CERRAR MODALES
// ------------------------------

function abrirModal(id) {
    const modal = obtenerElemento(id);

    if (modal) {
        modal.classList.remove("oculto");
        modal.style.display = "flex";
    }
}

function cerrarModal(id) {
    const modal = obtenerElemento(id);

    if (modal) {
        modal.classList.add("oculto");
        modal.style.display = "none";
    }
}

// ------------------------------
// 9. INICIAR LA PÁGINA
// ------------------------------

function iniciarFalcora() {
    mostrarMotos();
    actualizarCarrito();
    actualizarMetodoPago();

    cerrarDetalles();
    cerrarCarrito();
    cerrarCheckout();

    const buscador = obtenerElemento("buscador");

    if (buscador) {
        buscador.addEventListener("input", mostrarMotos);
    }

    const metodoPago = obtenerElemento("metodoPago");

    if (metodoPago) {
        metodoPago.addEventListener("change", actualizarMetodoPago);
    }

    console.log(
        "Falcora Motors iniciado correctamente. Motocicletas:",
        motos.length
    );
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarFalcora);
} else {
    iniciarFalcora();
}
