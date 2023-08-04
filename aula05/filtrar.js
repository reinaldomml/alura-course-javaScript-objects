const clientes = require('./clientes.json')

function filtrarApartamentosSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento')
    })
}

const apartamentosFiltrados = filtrarApartamentosSemComplemento(clientes)

console.log(apartamentosFiltrados)
