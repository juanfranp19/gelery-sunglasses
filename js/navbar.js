window.onload = function() {

    /* resaltar dónde estamos en el nav */

    // Selecciona todos los enlaces del menú
    const menuItems = document.querySelectorAll('.nav-link');

    // Obtiene el nombre del archivo actual
    const currentPath = window.location.pathname.split('/').pop(); // Ejemplo: "index.html"

    // Itera sobre los enlaces del menú
    menuItems.forEach(item => {
        // Si el href del enlace coincide con el archivo actual, añade la clase 'active'
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });

    /* botones de cambio de idioma */

    const botonES = document.getElementById('botonES');
    const botonEN = document.getElementById('botonEN');

    let idioma;

    botonES.onclick = declararVariableLanguageES;
    botonEN.onclick = declararVariableLanguageEN;

    function declararVariableLanguageES() {
        idioma = 'es';
        cambiarURL();
    }

    function declararVariableLanguageEN() {
        idioma = 'en';
        cambiarURL();
    }

    function cambiarURL() {

        let url = '';

        if (idioma === 'es') {
            url = '/views/es/index.html';
        } else if (idioma === 'en') {
            url = '/views/en/home.html';
        }

        window.location.href = url;
    }

}
