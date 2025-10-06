
class Categoria extends Tipografia {

    constructor(nombre, colorCard, colorTexto, id) {
        super(colorCard, colorTexto, id);
        this.nombre = nombre;
        
    }

    getTitulo() {
        return this.nombre;
    }

    
    getFontFamily() {
        return ''; 
    }
}

let categorias = [
    new Categoria("MODERNA", COLOR_CARD_OSCURA, "border border-gray-700", "moderna-card"),
    new Categoria("ELEGANTE", COLOR_CARD_OSCURA, "border border-gray-700", "elegante-card"),
    new Categoria("CLÁSICA", COLOR_CARD_AMARILLA, "text-black", "clasica-card"),
    new Categoria("CREATIVA", COLOR_CARD_AMARILLA, "text-black", "creativa-card"),
];

const contenedorCategorias = document.getElementById('categorias-container');

const cardsCategorias = categorias.map(categoria => categoria.generarCard()).join('');

contenedorCategorias.innerHTML = cardsCategorias;
