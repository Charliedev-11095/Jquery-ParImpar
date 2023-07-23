$(document).ready(function() {
    // Agregamos un evento click al botón "Comprobar"
    $('#btnComprobar').on('click', function() {
        // Obtenemos el valor del número ingresado por el usuario
        var numero = parseInt($('#numero').val());

        // Comprobamos si el número es par o impar
        if (numero % 2 === 0) {
            // El número es par
            alert('El número ' + numero + ' es PAR.');
        } else {
            // El número es impar
            alert('El número ' + numero + ' es IMPAR.');
        }
    });
});
