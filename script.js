document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los botones con la clase 'bot'
    const buttons = document.querySelectorAll('.bot button');

    // Encuentra el elemento con la clase 'card3'
    const card3 = document.querySelector('.card3');

    // Añade un evento click a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Realiza el desplazamiento suave hacia el elemento 'card3'
            card3.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
