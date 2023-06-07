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

// Validar endereço do cliente

//object.keys: retorna um array com as chaves do objeto
const chavesdoObjeto = Object.keys(cliente)

console.log(chavesdoObjeto)

// includes: verifica se o valor passado como parametro existe no array
if (chavesdoObjeto.includes('enderecos')) {
    console.log('O cliente possui endereço')
} else {
    console.error('O cliente não possui endereço')
}
