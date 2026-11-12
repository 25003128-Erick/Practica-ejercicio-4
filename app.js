class RolloAuditado{
    constructor(id,metrosTotales,metrosDefecto){
        this.id = id;
        this.metrosTotales = metrosTotales;
        this.metrosDefecto = metrosDefecto;
    }
}

function porcetajeDefecto(){
    return(this.metrosDefecto/this.metrosTotales)*100;
}

const idRollo = document.getElementById("idRollo");
const mtsTotales = document.getElementById("mtsTotales");
const mtsDefecto = document.getElementById("mtsDefecto");
const btnAuditar = document.getElementById("btnAuditar");
const tablaMermas = document.getElementById("tablaMermas");

let rollos = JSON.parse(localStorage.getItem("rollos")) || [];

mostrarRollos();

btnAuditar.addEventListener("click", guardarAuditoria);

function guardarAuditoria(){
    id = idRollo.value.trim();
    mTotal = mtsTotales.value.trim();
    mDefec = mtsDefecto.value.trim();

    if(mtsDefecto>mtsTotales){
        return alert("Hay más metros defectuosos");
    }
}