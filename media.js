function CalcularMedia(...numeros){
    const soma = numeros.reduce(function(total, atual){//reduce é um metodo do array que reduz valores em um só
        return total + atual;
    }, 0);

    const resultado = soma / numeros.length//length mostra quantos elementos tem dentro de um array

if(resultado<=6.9){
    console.log("sua media é " + resultado.toFixed(2) + ", não passou")
} else {
   console.log("sua media é " + resultado.toFixed(2) + ", passou") 
}

   return resultado;

}

CalcularMedia(10,0,10,10,0,10,10,10);