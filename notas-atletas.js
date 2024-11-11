// Função que calcula a média válida das notas de cada atleta
function calcularMediaAtletas(atletas) {
    // Percorre cada atleta
    for (let i = 0; i < atletas.length; i++) {
        // Ordena as notas do atleta
        let notasOrdenadas = atletas[i].notas.sort((a, b) => a - b);
        
        // Remove a menor e a maior nota
        let notasValidas = notasOrdenadas.slice(1, 4);
        
        // Calcula a média das notas válidas
        let somaNotas = 0;
        notasValidas.forEach(nota => somaNotas += nota);
        let media = somaNotas / notasValidas.length;
        
        // Exibe o resultado
        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas Obtidas: ${atletas[i].notas.join(', ')}`);
        console.log(`Média Válida: ${media.toFixed(6)}`);
        console.log('');
    }
}

// Dados dos atletas
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

// Chama a função para calcular e mostrar as médias
calcularMediaAtletas(atletas);
