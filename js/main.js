$(document).ready(function() {
    $('#btnComprobar').on('click', function() {
        var numero = parseInt($('#numero').val());
        var resultadoElement = $('#resultado'); // Elemento donde se mostrará el resultado

        if (numero === 0) {
            resultadoElement.text('El número es cero.');
        } else if (numero % 2 === 0) {
            resultadoElement.text('El número ' + numero + ' es PAR.');
        } else {
            resultadoElement.text('El número ' + numero + ' es IMPAR.');
        }
    });
});
