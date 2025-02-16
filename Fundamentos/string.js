const nome = "Dejaiuson"


console.log(nome.charAt(4)) //o método charAt() retorna o caractere na posição especificada. Nesse caso, ele retorna o 'i'
console.log(nome.charAt(3))
console.log(nome.charCodeAt(3)) //o método charCodeAt() retorna o código unicode do caractere na posição especificada. Nesse caso, ele retorna o código unicode do caractere 'a'
console.log(nome.indexOf('a')) //o método indexOf() retorna a posição do caractere especificado

console.log(nome.substring(1))
console.log(nome.substring(0, 3)) //o método substring() retorna uma substring

console.log('Nome '. concat(nome).concat("!"))
console.log(nome.replace('a', 'o'))
console.log(nome.replace(/\w/g, 'o')) //o método replace() substitui todos os caracteres que atendem a uma determinada expressão regular.

console.log('Ana, Maria, Pedro'.split(',')) //o método split() divide uma string em um array de strings



