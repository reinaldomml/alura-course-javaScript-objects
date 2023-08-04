const clientes = require('./clientes.json')

function ordenarClientes(list, property) {
    const result = list.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1
        }
        if (a[property > b[property]]) {
            return 1
        }
        return 0
    })
    return result
}

const ordenados = ordenarClientes(clientes, 'nome')

console.log(ordenados)
