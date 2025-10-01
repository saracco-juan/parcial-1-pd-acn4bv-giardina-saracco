const links = document.querySelectorAll('a[href="#"]');
const modal = document.getElementById('modal');
const cerrarModalBtn = document.getElementById('cerrar-modal');

links.forEach(link => {

    link.addEventListener('click', (e) => {

        console.log('Link clickeado');

        e.preventDefault();

        modal.classList.remove('hidden');

    });
});

cerrarModalBtn.addEventListener('click', () => {

    console.log('Cerrar modal clickeado');

    modal.classList.add('hidden');

});
