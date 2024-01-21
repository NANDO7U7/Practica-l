// mi_script.js

document.addEventListener('DOMContentLoaded', function() {

    var miboton = document.getElementById('miboton');

    miboton.addEventListener('click', handleClick);

    function handleClick() {
        alert('¡Hiciste clic en el botón!');
    }
});
