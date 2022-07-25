
var classificacao = "";
var massa = "";

var cal = document.getElementById('cal').value = 'Calcular';



function calculo() {

    var nome = document.getElementById('nome').value;

    var altura = document.getElementById('altura').value;

    var peso = document.getElementById('peso').value;

    var altura = parseFloat(altura);
    var peso = parseFloat(peso);

    var altura = (altura / 100);

    var massa = peso / Math.pow(altura, 2);

    if (nome === "") {
        alert('insira o nome');
        return;
    } if (altura === "") {
        alert('insira a altura');
        return;
    } if (peso === "") {
        alert('insira o peso');
        return;
    }


    if (massa <= 16) {

        classificacao = 'Baixo peso muito grave: Procure um médico urgente';

    }
    if (massa >= 16 && massa <= 16.99) {

        classificacao = 'Baixo peso grave: Procure um médico urgente';
    }

    if (massa >= 17 && massa <= 18.49) {

        classificacao = 'Baixo peso: Procure um médico';
    }

    if (massa >= 18.50 && massa <= 24.99) {

        classificacao = 'Peso normal: Parabéns seu peso está ideal';
    }

    if (massa >= 25 && massa <= 29.99) {

        classificacao = 'Sobrepeso: Está exagerando na comida viu?';

    }

    if (massa >= 30 && massa <= 34.99) {

        classificacao = 'Obesidade grau I: Procure um médico';
    }

    if (massa >= 35 && massa <= 39.99) {

        classificacao = 'Obesidade grau II: Procure um médico urgente';
    }

    if (massa >= 40) {

        classificacao = ' Obesidade grau III: Vai infartar';
    }


    var resultado = document.getElementById('resultado');


    resultado.textContent = `${nome} seu Imc é de: ${Math.round(massa)} e voce está com: ${classificacao}`;

    //  console.log(match.round(massa), classificacao)
   // console.log('Nome: ' + nome)
   // console.log('Altura: ' + altura.toFixed(2))
  //  console.log('peso: ' + peso)
   // console.log(nome + 'possui índice de massa corporal igual a' + Math.round(massa) + 'sendo classificado como:' + classificacao);
}
