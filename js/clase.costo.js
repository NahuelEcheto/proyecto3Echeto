class Precio {
    constructor(ancho, alto, material) {
        this.ancho = ancho || 0
        this.alto = alto || 0
        this.material = material || 0
    }

    calcularPrecioFinal() {
        let costo = (this.ancho * this.alto) * this.material
        return costo
    }
}

