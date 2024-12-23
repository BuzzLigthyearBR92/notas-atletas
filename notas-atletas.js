let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(atletas) {
  atletas.forEach(atleta => {
    // Ordena as notas em ordem crescente
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);

    // Remove a menor e maior nota
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Calcula a média das notas
    let soma = 0;
    notasComputadas.forEach(nota => soma += nota);
    let media = soma / notasComputadas.length;

    // Exibe o resultado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media.toFixed(6)}\n`);
  });
}

calcularMedia(atletas);