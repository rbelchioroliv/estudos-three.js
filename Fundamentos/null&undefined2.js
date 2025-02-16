let valor //não inicializada 
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //erro, pois valor é null e não tem toString()  //

const produto = {}
console.log(produto.preco) // undefined, pois não foi inicializado 
console.log(produto) // { } pois foi declarado como objeto

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem precço
console.log(!!produto.preco)
console.log(produto)

