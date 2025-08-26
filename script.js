// Cria uma lista com números disponíveis de 1 a 75
let numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1); // cria um array novo com tamanho 75
let numerosSorteados = []; // armazenando em uma lista

// Cria elementos dinamicos no html para mostrar números na cartela
const cartelaDiv = document.getElementById("cartela");
numerosDisponiveis.forEach(num => { // forEach percorre cada número do array
  const div = document.createElement("div");
  div.classList.add("numero"); // 1. cria uma div para cada número | 2. adiciona a classe css "numero", | 3. dá um id único | 4. escreve o número dentro do id | 5. coloca a div na cartela
  div.id = "num-" + num;
  div.textContent = num;
  cartelaDiv.appendChild(div);
});

// função para sortear número aleatório
function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    alert("Os números já foram sorteados");
    return;
  }

  // escolhe indice aleatorio
  const indice = Math.floor(Math.random() * numerosDisponiveis.length);

  // pega o numero do indice
  const numero = numerosDisponiveis[indice];
  // remove o número para não repetir 
  numerosDisponiveis.splice(indice, 1);
  // adiciona os numeros nos sorteados
  numerosSorteados.push(numero);

 // mostra o numero sorteado
  document.getElementById("numeroAtual").textContent = numero;
  // marca o numero sorteado na cartela
  document.getElementById("num-" + numero).classList.add("sorteado");
}
// evento do botão na função sortearNumero
document.getElementById("btnSortear").addEventListener("click", sortearNumero);