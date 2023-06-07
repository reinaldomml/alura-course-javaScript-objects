const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: '12345678900',
    email: 'andre@dominio.com',
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

console.log('Os 3 primeiros digitos do CPF sao: ' + cliente.cpf.substring(0, 3))
