
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valor1').value);
    const inputResultado = document.getElementById('resultado');

    if (isNaN(valorCompra)) {
        inputResultado.value = "Digite um valor válido!";
        return;
    }

    let percentualDesconto = 0;

    
    if (valorCompra > 200) {          
        percentualDesconto = 10;
    } else if (valorCompra > 50) {   
        percentualDesconto = 5;
    } else {                           
        percentualDesconto = 0;
    }

    const valorDesconto = (valorCompra * percentualDesconto) / 100;
    const valorFinal = valorCompra - valorDesconto;

    if (percentualDesconto === 0) {
        inputResultado.value = `Sem desconto (Total: R$ ${valorFinal.toFixed(2)})`;
    } else {
        inputResultado.value = `R$ ${valorFinal.toFixed(2)} (${percentualDesconto}% de desc.)`;
    }
});