const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: '12345678900',
    email: 'joao@dominio.com',
    telefone: ['559123456789', '559123456780'],
    dependentes: [
        {
            nome: 'Luma',
            parentesco: 'filha',
            dataNasc: '20/03/2011',
        },
        {
            nome: 'Lara',
            parentesco: 'filha',
            dataNasc: '04/01/2014',
        },
    ],
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

cliente.enderecos.push({
    rua: 'Tamoios',
    numero: 0,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    apartamento: true,
    complemento: 'ap 501',
})

const listaApenasAprtamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

console.log(listaApenasAprtamentos)
