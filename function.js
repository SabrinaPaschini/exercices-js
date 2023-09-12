/*// Declaração de função usando a palavra-chave "function".
// Nome da função: minhaFuncao
// Parâmetros: parametro1, parametro2
function minhaFuncao(parametro1, parametro2) {
    // Corpo da função: Código que a função executa quando é chamada.
    // Neste exemplo, estamos apenas somando os dois parâmetros e retornando o resultado.
    let resultado = parametro1 + parametro2;
    
    // A declaração "return" especifica o valor retornado pela função.
    return resultado;
  }
  
  // Chamando a função e passando argumentos para os parâmetros.
  let valor1 = 5;
  let valor2 = 3;
  let resultadoDaFuncao = minhaFuncao(valor1, valor2);
  
  // Imprimindo o resultado no console.
  console.log("O resultado da função é: " + resultadoDaFuncao);
  */

  // calculando juros compostos 

  const valorInicial = parseFloat(gets());
  const taxaJuros = parseFloat(gets());
  const periodo = parseInt(gets());
  
  let valorFinal = valorInicial;
  
  //TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
  
  function valorFinalInvestimento(valorInicial, taxaJuros, periodo) {
    let valorFinal = valorInicial * Math.pow(1 + taxaJuros, periodo);
    return valorFinal.toFixed(2);
  }
  
  let resultado = valorFinalInvestimento(valorInicial, taxaJuros, periodo);
  console.log('Valor final do investimento: R$', resultado);