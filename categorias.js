class Categoria {

    constructor(nombre, colorCard, colorTexto, fontFamily) {

        this.nombre = nombre;

        this.colorCard = colorCard;

        this.colorTexto = colorTexto;

        this.fontFamily = fontFamily;

    }

    getNombre() {
        return this.nombre;
    }

    getColorCard() {
        return this.colorCard;
    }

    getColorTexto() {
        return this.colorTexto;
    }

    generarCard() {
        return `
        <div class="${this.colorCard} rounded-2xl p-8 ${this.colorTexto} hover:scale-105 transition-transform cursor-pointer">
            <div class="text-6xl font-bold mb-4 ${this.fontFamily}">Aa</div>
            <h3 class="text-xl font-semibold ${this.fontFamily}">${this.nombre}</h3>
        </div>
        `;
    }
}

const COLOR_CARD_AMARILLA = "bg-amarillo";

const COLOR_CARD_OSCURA = "bg-card-bg";

let categorias = [
    new Categoria("MODERNA", COLOR_CARD_AMARILLA, "text-black", "sansation"),
    new Categoria("ELEGANTE", COLOR_CARD_AMARILLA, "text-black", "playfair-display"),
    new Categoria("CLÁSICA", COLOR_CARD_OSCURA, "border border-gray-700", "roboto"),
    new Categoria("CREATIVA", COLOR_CARD_OSCURA, "border border-gray-700", "montserrat"),
];