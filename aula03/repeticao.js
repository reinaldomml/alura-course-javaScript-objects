const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: '12345678900',
    email: 'joao@dominio.com',
    telefone: ['559123456789', '559123456780'],
}

cliente.enderecos = [
    {
        rua: 'Rua dos bobos',
        numero: 60,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        apartamento: true,
        complemento: 'ap 1501',
    },
]

// Como percorrer cada key de um objeto?
// for … In - permite a iteração sobre as propriedades de um objeto como em um array.

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
    }
}
