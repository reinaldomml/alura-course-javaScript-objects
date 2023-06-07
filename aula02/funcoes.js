const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: '12345678900',
    email: 'joao@dominio.com',
    telefone: ['559123456789', '559123456780'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente :(')
        } else {
            this.saldo -= valor
            console.log(`Pagamento efetuado com sucesso. Seu saldo atual é de ${this.saldo}`)
        }
    },
}

cliente.efetuaPagamento(98)

console.log(cliente)
