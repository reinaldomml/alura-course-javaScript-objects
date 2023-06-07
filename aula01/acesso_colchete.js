const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: '12345678900',
    email: 'andre@dominio.com',
}

console.log(`Meu nome é ${cliente['nome']} e tenho ${cliente['idade']} anos.`)

const chaves = ['nome', 'idade', 'cpf', 'email', 'Altura']

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
})
