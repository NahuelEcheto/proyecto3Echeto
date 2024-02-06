const btnAceptar = document.querySelector("button.button-aceptar")

const spanAncho = document.querySelector("span.label-ancho")
const spanAlto = document.querySelector("span.label-alto")
const spanSeleccion = document.querySelector("span.label-material")
const spanCostoMaterial = document.querySelector("span.label-costo-material")
const spanTotal = document.querySelector("span.label-total")
const divMensajeFinal = document.querySelector("div#mensajeFinal")

function recuperarDeLocalStorage() {
    const datosDelMueble = JSON.parse(localStorage.getItem("DatosDelMueble"))

    spanAncho.textContent = datosDelMueble.ancho + "mts"
    spanAlto.textContent = datosDelMueble.alto + "mts"
    spanSeleccion.textContent = "$" + datosDelMueble.material     
    spanCostoMaterial.textContent = datosDelMueble.materialElegido
    spanTotal.textContent = "$" + datosDelMueble.total
}

btnAceptar.addEventListener("click", ()=> {
    divMensajeFinal.classList.add("transition-div-show")
    localStorage.removeItem("DatoDelMueble")
    btnAceptar.setAttribute("disabled", "true")
})


recuperarDeLocalStorage()