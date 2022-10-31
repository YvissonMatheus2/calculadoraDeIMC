//REFERENCIAS
const telaCalculadora = document.getElementById("calculadora");
const telaResultado = document.getElementById("resultado");
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");
const imcTexto = document.getElementById("imcTexto");
//VARIAVEIS
let imc = 0;

//FUNÇÃO PRINCIPAL

function calcularImc(){
    
    const metros = inputAltura.value/100;
    const quilos = inputPeso.value;

    imc = ((quilos) / (metros * metros));
    imc = imc.toFixed(1);

    

    if(inputAltura.value == "" || inputPeso.value == ""){
        
        window.alert("Algum valor ainda não foi definido!");

    }
    else
    {
        
        console.log(imc);

        telaCalculadora.style.display = "none";
        telaCalculadora.style.zIndex = "0";

        telaResultado.style.display = "inline";
        telaResultado.style.zIndex = "100";

    }

        if(imc <= 18){
            imcTexto.value = "Seu IMC é de " + imc + " você está abaixo do peso ideal!"
        }
        else if(imc <= 24){
            imcTexto.value = "Seu IMC é de " + imc + " você está no peso ideal!"
        }
        else if(imc <= 29){
            imcTexto.value = "Seu IMC é de " + imc + " você está acima do peso!"
        }
        else if(imc <= 34){
            imcTexto.value = "Seu IMC é de " + imc + " Obesidade classe 1!"
        }
        else if(imc <= 34){
            imcTexto.value = "Seu IMC é de " + imc + " Obesidade classe 2!"
        }
        else if(imc >= 40){
            imcTexto.value = "Seu IMC é de " + imc + " Obesidade classe 3!"
        }

    circleGraph();
}

//FUNÇÕES SECUNDÁRIAS

    //Volta para a calculadora
        function back(){
            telaCalculadora.style.display = "inline";
            telaCalculadora.style.zIndex = "100";

            telaResultado.style.display = "none";
            telaResultado.style.zIndex = "0";
        }

    //Faz o circulo ser igual ao valor do IMC
        function circleGraph(){
            const circleImc = document.getElementById("circle-imc");

            circleImc.style.strokeDashoffset = 440 - (440 * imc) / 59;
            if(imc >= 40){
                circleImc.style.strokeDashoffset = "125.288px"
            }
        }

    //Apaga todos os campos do input
        function allClear(){
            inputAltura.value = null;
            inputPeso.value = null;
        }
