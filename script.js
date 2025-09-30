

class Categoria {

    constructor(nombre, colorCard, colorTexto, fontFamily, id) {

        this.nombre = nombre;

        this.colorCard = colorCard;

        this.colorTexto = colorTexto;

        this.fontFamily = fontFamily;

        this.id = id;

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
        <div id=${this.id} class="${this.colorCard} rounded-2xl p-8 ${this.colorTexto} hover:scale-105 transition-transform cursor-pointer">
            <div class="text-6xl font-bold mb-4 ${this.fontFamily}">Aa</div>
            <h3 class="text-xl font-semibold ${this.fontFamily}">${this.nombre}</h3>
        </div>
        `;
    }
}

const COLOR_CARD_AMARILLA = "bg-amarillo";

const COLOR_CARD_OSCURA = "bg-card-bg";

let categorias = [
    new Categoria("MODERNA", COLOR_CARD_AMARILLA, "text-black", "sansation", "moderna-card"),
    new Categoria("ELEGANTE", COLOR_CARD_AMARILLA, "text-black", "playfair-display", "elegante-card"),
    new Categoria("CLÁSICA", COLOR_CARD_OSCURA, "border border-gray-700", "roboto", "clasica-card"),
    new Categoria("CREATIVA", COLOR_CARD_OSCURA, "border border-gray-700", "montserrat", "creativa-card"),
];

const contenedor = document.getElementById('categorias-container');

const cardsCategorias = categorias.map(categoria => categoria.generarCard()).join('');

contenedor.innerHTML = cardsCategorias;

console.log('Cantidad de categorias:', categorias.length);

const modernaCard = document.getElementById('moderna-card');
const eleganteCard = document.getElementById('elegante-card');
const clasicaCard = document.getElementById('clasica-card');
const creativaCard = document.getElementById('creativa-card');

const fontDisplayCard = document.getElementById('display-font');


modernaCard.addEventListener('click', () => {
    console.log('Categoría MODERNA clickeada');
    fontDisplayCard.style.fontFamily = 'sansation, sans-serif';
});

eleganteCard.addEventListener('click', () => {
    console.log('Categoría ELEGANTE clickeada');
    fontDisplayCard.style.fontFamily = 'playfair-display, serif';
}
);

clasicaCard.addEventListener('click', () => {
    console.log('Categoría CLÁSICA clickeada');
    fontDisplayCard.style.fontFamily = 'roboto, sans-serif';
});

creativaCard.addEventListener('click', () => {
    console.log('Categoría CREATIVA clickeada');
    fontDisplayCard.style.fontFamily = 'montserrat, sans-serif';
});
