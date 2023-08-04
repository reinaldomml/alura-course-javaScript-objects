const dados = require('./cliente.json')

// console.log(dados.endereco.rua)
// console.log(typeof dados)

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)

const clienteEmJSON = JSON.parse(clienteEmString)

console.log(clienteEmJSON)
