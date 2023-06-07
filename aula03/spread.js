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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

// ligaParaCliente(...cliente.telefone)

//Spread operator server para espalhar os elementos de um array ou objeto
// Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)
