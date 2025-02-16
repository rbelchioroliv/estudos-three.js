const a = {name: 'teste'}  //o que tem dentro do 'a' não é realmente o objeto, é o endereço de memória onde o objeto está armazenado, o 'a' é como um ponteiro

console.log(a)

const b = a

console.log(b.name)

b.name = 'outro' //o 'b' agora aponta para outro endereço d
console.log(b)
console.log(a)

let c = 3
let d = c
d++

console.log(d) //aqui está acontecendo o que é chamado de "copiar" o valor, não o endereço de memória, então o 'd' não está apontando para o mesmo endereço que o 'c' e não está mudando o valor do 'c' quando o 'd' é incrementado.
console.log(c)