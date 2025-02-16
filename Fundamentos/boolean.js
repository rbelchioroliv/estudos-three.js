let isAtv = false
console.log(isAtv)

isAtv = true
console.log(isAtv)


isAtv = 1
console.log(!isAtv) 
console.log(!!isAtv) //!! é uma forma de converter para booleano


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'a')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtv = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN) // Not a Number
console.log(!!(isAtv = false))


console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //retorna true pois o || é um operador que busca a primeira valor verdadeiro e o retorna


let nome = 'Lucas'
console.log(nome || 'Desconhecido') 