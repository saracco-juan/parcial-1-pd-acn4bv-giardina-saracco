
class Tipografia {

    constructor(colorCard, colorTexto, fontFamily, id) {

        this.colorCard = colorCard;

        this.colorTexto = colorTexto;

        this.fontFamily = fontFamily;

        this.id = id;

    }

    getColorCard() {
        return this.colorCard;
    }

    getColorTexto() {
        return this.colorTexto;
    }

    getTitulo() {
        return this.fontFamily.toUpperCase();
    }

    
    getFontFamily() {
        return this.fontFamily;
    }    

    generarCard() {
        return `
        <div id="${this.id}" class="${this.colorCard} rounded-2xl p-8 ${this.colorTexto} hover:scale-105 transition-transform cursor-pointer">
            <div class="text-6xl font-bold mb-4 ${this.getFontFamily()}">Aa</div>
            <h3 class="text-xl font-semibold ${this.getFontFamily()}">${this.getTitulo()}</h3>
        </div>
        `;
    }
}

const COLOR_CARD_AMARILLA = "bg-amarillo";

const COLOR_CARD_OSCURA = "bg-card-bg";

let tipografias = [
    new Tipografia(COLOR_CARD_AMARILLA, "text-black", "sansation", "sansation-card"),
    new Tipografia(COLOR_CARD_AMARILLA, "text-black", "playfair-display", "playfair-display-card"),
    new Tipografia(COLOR_CARD_OSCURA, "border border-gray-700", "roboto", "roboto-card"),
    new Tipografia(COLOR_CARD_OSCURA, "border border-gray-700", "montserrat", "montserrat-card"),
];

const contenedor = document.getElementById('tipografias-container');

const cardsTipografias = tipografias.map(tipografia => tipografia.generarCard()).join('');

contenedor.innerHTML = cardsTipografias;

let fuenteSeleccionada = '';

const sansationCard = document.getElementById('sansation-card');
const playfairCard = document.getElementById('playfair-display-card');
const robotoCard = document.getElementById('roboto-card');
const montserratCard = document.getElementById('montserrat-card');
const fontDisplayCard = document.getElementById('display-font');
const fontTestingInput = document.getElementById('font-testing');
const clearTextButton = document.getElementById('clear-text-button');
const favouriteButton = document.getElementById('favourite-button');
const favouritesContainer = document.getElementById('favourites-container');

// ---------------------Guardar y recuperar fuentes favoritas con localStorage

const favoritasStorage = localStorage.getItem('fuentesFavoritas');

const favoritas = favoritasStorage ? JSON.parse(favoritasStorage) : []

const mostrarFavoritas = () => {

    favouritesContainer.innerHTML = '<span class="text-lg text-white">Fuentes Favoritas</span>';

    favoritas.forEach(favorita => {

        const div = document.createElement('div');

        div.className = 'text-white';

        div.textContent = favorita;

        favouritesContainer.appendChild(div);
    });
};

mostrarFavoritas();


favouriteButton.addEventListener('click', () => {

    if (fuenteSeleccionada) {

        if (!favoritas.includes(fuenteSeleccionada)) {

            favoritas.push(fuenteSeleccionada);

            localStorage.setItem('fuentesFavoritas', JSON.stringify(favoritas));

            fontDisplayCard.textContent = `Fuente ${fuenteSeleccionada} añadida a favoritas!`;

            setTimeout(() => {

                clearDisplayFont();

            }, 4000);
        } else {
            alert(`La fuente ${fuenteSeleccionada} ya está en favoritas.`);
        }
    } else {
        fontDisplayCard.textContent = 'No seleccionaste ninguna fuente.';
    }

    mostrarFavoritas();
});

// ---------------------Prueba de fuentes seleccionadas

clearTextButton.addEventListener('click', () => {
    fontTestingInput.value = '';
    clearDisplayFont();
});

fontTestingInput.addEventListener('input', () => {
    const texto = fontTestingInput.value;
    if (texto) {
        fontDisplayCard.textContent = texto;
    } else {
        clearDisplayFont();
    }
    if(texto.length === 30){
        fontDisplayCard.textContent = 'Has alcanzado el límite de 30 caracteres.';
    }
});

sansationCard.addEventListener('click', () => {
    fontDisplayCard.style.fontFamily = 'sansation';
    fuenteSeleccionada = 'sansation';
});

playfairCard.addEventListener('click', () => {
    fontDisplayCard.style.fontFamily = 'playfair-display';
    fuenteSeleccionada = 'playfair-display';
}
);

robotoCard.addEventListener('click', () => {
    fontDisplayCard.style.fontFamily = 'roboto';
    fuenteSeleccionada = 'roboto';
});

montserratCard.addEventListener('click', () => {
    fontDisplayCard.style.fontFamily = 'montserrat';
    fuenteSeleccionada = 'montserrat';
});

const clearDisplayFont = () => {
    fontDisplayCard.innerHTML = `<div id="display-font"
                    class="text-amarillo text-8xl font-bold leading-none mb-8 break-words whitespace-normal w-full">
                    AåBbCc<br>
                    #9½<br>
                    ƒ%£©∑∅!
                </div>`;
    fuenteSeleccionada = '';
    fontDisplayCard.style.fontFamily = '';
};