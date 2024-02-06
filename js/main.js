const arrayMateriales = [{id: 1, descripcion: "Melamina blanca", precio: 10000 },
                      {id: 2, descripcion: "Melamina de color", precio: 22000},
                      {id: 3, descripcion: "Madera de pino", precio: 7900},]

const inputAncho = document.querySelector("input#anchoDelMueble") 
const inputAlto = document.querySelector("input#altoDelMueble")                        
const selectMaterial = document.querySelector("select")
const btnCalcular = document.querySelector("button.button-calcular")


function cargarMateriales() {
    if (arrayMateriales.length > 0) {
        arrayMateriales.forEach((material) => {
            selectMaterial.innerHTML += `<option>${material.descripcion}</option>`
        })
    }
}

function retornarPrecio(descripcion) {
    let material = arrayMateriales.find((material)=> material.descripcion === descripcion)
    return material.precio
}

function guardarEnLocalStorage(ancho, alto, material, materialElegido, total) {
    const datosDelMueble = {
        ancho: ancho,
        alto: alto,
        material: material,
        materialElegido: materialElegido,
        total: total
    }

    localStorage.setItem("DatosDelMueble", JSON.stringify(datosDelMueble))
}

function calcularPrecio() {
    let ancho = parseFloat(inputAncho.value)
    let alto = parseFloat(inputAlto.value)
    let material = retornarPrecio(selectMaterial.value)

    const precio = new Precio(ancho, alto, material)
    let precioMueble = precio.calcularPrecioFinal()

    guardarEnLocalStorage(ancho, alto, material, selectMaterial.value, precioMueble)
    location.href = "presupuesto.html"
}



btnCalcular.addEventListener("click", ()=> calcularPrecio())

cargarMateriales()