let nome ="pirulito";
let altura = 1.80;
let peso = 80;
const imc = peso / (altura * altura);{
    if(imc<18.5)
        console.log("olá " + nome + ", seu imc é " , imc.toFixed(1) , "esta abaixo do peso ");}{
    if(imc>=18.5 && imc<=24.9)
        console.log("olá " + nome + ", seu imc é" , imc.toFixed(1) , "esta dentro da normalidade");}{
   if(imc>=25.0 && imc<=29.9)
        console.log("olá " + nome + ", seu imc é" , imc.toFixed(1) , "esta com sobre peso");}{
    if(imc>30.0)
    console.log("olá " + nome + ", seu imc é" , imc.toFixed(1) , "voce esta muito acima do peso")}
