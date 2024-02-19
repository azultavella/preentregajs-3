class Turno {
    constructor(nombreApellido, telefono, correo, fecha) {
        this.nombreApellido = nombreApellido;
        this.telefono = telefono;
        this.correo = correo;
        // Fecha de string a Date
        this.fecha = new Date(fecha.split("/").reverse().join("-"));
    }
}
const turnos = [];

function obtenerTurno() {
    while (true) {
        const nombreApellido = prompt("Ingrese su nombre y apellido:");
        const telefono = prompt("Ingrese su teléfono:");
        const correo = prompt("Ingrese su correo electrónico:");
        const fecha = prompt("Ingrese la fecha de turno (DD/MM/AAAA):");

        if (!nombreApellido || !telefono || !correo || !fecha) {
            alert("Todos los campos son obligatorios");
            continue;
        }

        const turnoYaAsignado = turnos.some(t => t.fecha.toDateString() === new Date(fecha.split("/").reverse().join("-")).toDateString());

        if (turnoYaAsignado) {
            alert("El turno para esa fecha ya fue asignado.");
        } else {
            const turno = new Turno(nombreApellido, telefono, correo, fecha);
            turnos.push(turno);
            alert("¡Turno asignado exitosamente!");
        }

        const continuar = prompt("¿Desea obtener otro turno? (S/N)").toLowerCase();
        if (continuar !== "s") {
            break;
        }
    }
}

function buscarTurnoPorFecha(fecha) {
    // Fecha ingresada a Date para la búsqueda
    return turnos.find(t => t.fecha.toDateString() === new Date(fecha.split("/").reverse().join("-")).toDateString());
}

function mostrarTurnos() {
    if (turnos.length === 0) {
        console.log("No hay turnos asignados.");
        return;
    }
    turnos.forEach((turno, index) => {
        console.log(`Turno ${index + 1}: ${turno.nombreApellido}, Teléfono: ${turno.telefono}, Correo: ${turno.correo}, Fecha: ${turno.fecha.toLocaleDateString()}`);
    });
}

// Para niciar el proceso
obtenerTurno();

// Para ver todos los turnos almacenados.
mostrarTurnos();
