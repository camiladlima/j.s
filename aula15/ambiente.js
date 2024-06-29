var num = [5, 8, 2, 9, 3]
//num[5] = 10  A posição dele vai ser onde o índice dizer
num.push(1) // Assim ele vai deduzir que é o último colocado
 // num.length  Ele é um atributo, o comprimento do vetor, pode mostrar a posição do vetor
num.sort() // vai pegar todos os valores e colocar em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} Posições`)
console.log(`O primeiro valor do vetor  ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
