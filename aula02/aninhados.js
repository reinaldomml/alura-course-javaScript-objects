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

cliente.endereco = {
    rua: 'Rua dos bobos',
    numero: 0,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    apartamento: true,
    complemento: 'ap 1501',
}

console.log(cliente.endereco)
