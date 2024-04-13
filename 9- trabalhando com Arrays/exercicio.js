function ordenarArray(numeros) {
    // Verificação se o array possui apenas 2 elementos
    if (numeros.length !== 2) {
      throw new Error("O array precisa ter apenas 2 números.");
    }
  
    // Atribuindo os valores do array a variáveis
    const num1 = numeros[0];
    const num2 = numeros[1];
  
    // Comparando os valores e retornando o array ordenado
    if (num1 <= num2) {
      return [num1, num2];
    } else {
      return [num2, num1];
    }
  }
  
  // Exemplo de uso
  const arrayNumeros = [5, 2];
  const arrayOrdenado = ordenarArray(arrayNumeros);
  console.log(arrayOrdenado); // Saída: [2, 5]