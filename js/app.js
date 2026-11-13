
const idRollo = document.getElementById("idRollo");
const mtsTotales = document.getElementById("mtsTotales");
const mtsDefecto = document.getElementById("mtsDefecto");
const btnAuditar = document.getElementById("btnAuditar");
const tablaMermas = document.getElementById("tablaMermas");

document.addEventListener("DOMContentLoaded", cargarRollos);

btnAuditar.addEventListener("click", guardarAuditoria);

class RolloAuditado {
    constructor(id, metrosTotales, metrosDefecto) {
        this.id = id;
        this.metrosTotales = metrosTotales;
        this.metrosDefecto = metrosDefecto;
    }
}

function guardarAuditoria() {
    const id = idRollo.value.trim();
    const mTotal = Number(mtsTotales.value);
    const mDefec = Number(mtsDefecto.value);

    if (mDefec > mTotal)
        return alert("Los metros defectuosos no pueden superar los metros totales");

    const rollos = obtenerRollos();
    const nuevoRollo = new RolloAuditado(id, mTotal, mDefec);
    rollos.push(nuevoRollo);
    localStorage.setItem("rollos", JSON.stringify(rollos));
    mostrarRollos();
    idRollo.value = "";
    mtsTotales.value = "";
    mtsDefecto.value = "";
}

function obtenerRollos() {
    return JSON.parse(localStorage.getItem("rollos")) || [];
}

function mostrarRollos() {
    const rollos = obtenerRollos();
    tablaMermas.innerHTML = "";

    for (let i = 0; i < rollos.length; i++) {
        const porcentaje = (rollos[i].metrosDefecto / rollos[i].metrosTotales) * 100;

        tablaMermas.innerHTML += '<tr>' +
            '<td>' + rollos[i].id + '</td>' +
            '<td>' + rollos[i].metrosTotales + '</td>' +
            '<td>' + porcentaje.toFixed(2) + '%</td>' +
            '<td>' + rollos[i].metrosDefecto + ' metros defectuosos</td>' +
            '</tr>';
    }
}

function cargarRollos() {
    mostrarRollos();
}
