// Função para ordenar uma lista usando Bubble Sort
function bubbleSort(lista) {
    let n = lista.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                // Troca os elementos de posição
                let temp = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = temp;
                trocou = true;
            }
        }
        n--; // Reduz o número de elementos a serem verificados
    } while (trocou);
    
    return lista;
}

// Exemplo de uso:
let lista = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista original:", lista);

let listaOrdenada = bubbleSort(lista);
console.log("Lista ordenada:", listaOrdenada);
