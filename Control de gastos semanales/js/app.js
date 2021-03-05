//  Variable y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//  Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//  Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) =>  total + gasto.cantidad, 0); //el reduce itera sobre todo el arreglo y nos da un gran total

        this.restante = this.presupuesto - gastado;
        }

        eliminarGasto(id) {
            this.gastos = this.gastos.filter( gasto => gasto.id !== id );
            this.calcularRestante();
        }
    }


//métodos que imprimen html basado en esta clase
class UI {
    insertarPresupuesto( cantidad ) {
        //Extrayendo los valores
        const { presupuesto, restante } = cantidad;
        //Insertando el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success');
        }
        //Mensaje de error
        divMensaje.textContent = mensaje;
        //insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario );

        //Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    mostrarGastos(gastos){

        this.limpiarHTML(); //Elimina el HTML previo

        //  Iterar sobre los gastos
        gastos.forEach( gasto => {

            const { cantidad, nombre, id } = gasto;
            //  Crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'; //classname reporta las clases que hay, class list reporta las clases que tiene
            //nuevoGasto.setAttribute('data-id', id); //agrega data-id y toma el valor del id

            nuevoGasto.dataset.id = id; //<-- dataset agrega data- y como ponemos .id lo que hace es agregar data-id y como estamos igualando id entonces lo que le estamos diciendo agrega data-id y tomalo del id

            //  Agregar el HTML del gasto
            nuevoGasto.innerHTML =`${nombre} <span class="badge badge-primary badge-pill"> $${cantidad}</span>`;

            //  Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //  Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        })
    }
    limpiarHTML() {
        while( gastoListado.firstChild ){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if( (presupuesto / 4 ) >= restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ( (presupuesto / 2) >= restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //  si el total es 0 o menor
        if(restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disable = true;
        }
    }
}

//instanciar
const ui = new UI();
let presupuesto;

//  Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    //Nota:
    // parseInt <-- convierte el numero en entero
    // parseFloat <-- convierte el numero en flotante
    // Number convierte esto en un numero, si escribe un string sale como Nan (not a number)

    //isNan es una funcion que dice que si el presupuestoUsuario da un Nan (not a number) entonces.. lo que viene
    //en nuestro caso le estamos diciendo si el presupuesto usuario tiene un string vacio, O es un null(que no tiene valores y le dan aceptar) o da un nan porque no es un numero entonces va a recargar la pantalla :)
    //console.log(Number(presupuestoUsuario));

    if( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}


//Añade gastos
function agregarGasto(e) {
    e.preventDefault();
    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }
    
    //  Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    //  Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    //  Mensaje de gasto agregado correctamente
    ui.imprimirAlerta('Gasto agregado Correctamente');
    
    //  Imprimir los gastos
    const { gastos, restante } = presupuesto
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //  Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    //Elimina del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;

    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}