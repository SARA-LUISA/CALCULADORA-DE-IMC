function calcularImc() {
    // Pegar valores dos inputs
    let peso = parseFloat(document.getElementById("peso").value); 
    // O comando parseFloat é usado para converter a string obtida
    // do input em um número decimal, permitindo que o cálculo do IMC
    //  seja realizado corretamente.
    // O comando document.getElementById("peso").value é usado para acessar o valor
    // do campo de entrada com o id "peso", onde o usuário digita seu peso.

    let altura = parseFloat(document.getElementById("altura").value);
    let cor = "";
 

    // Calcular IMC
    let imc = peso / (altura * altura);
    
    // Mostrar resultado
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        cor = "red";
    } else if (imc >= 18.6 && imc < 25) {
        classificacao = "Peso normal";
        cor = "green";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
            cor = "orange";
    } else {
        classificacao = "Obesidade";    
        cor = "red";
    }
    alert("Seu IMC é: " + imc + "\n" + classificacao);
 
   
   document.getElementById("resultado").value = "Seu IMC é: " + imc + "\n"
    + classificacao;
   document.getElementById("resultado").style.color = cor;
   // O comando imc.toFixed(2) é usado para formatar o valor do IMC com duas casas decimais, 
   // tornando a apresentação do resultado mais clara e legível para o usuário.


}// O comando document.getElementById("resultado").value é usado para definir o valor
//  do campo de entrada com o id "resultado", onde o resultado do cálculo do IMC será 
// exibido para o usuário. O comando document.getElementById("resultado").style.color 
// é usado para definir a cor do texto do resultado, que varia de acordo com a classificação
//  do IMC (vermelho para abaixo do peso e obesidade, verde para peso normal e laranja para 
// sobrepeso).