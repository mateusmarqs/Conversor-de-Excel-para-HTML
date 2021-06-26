const { mainModule } = require('process')
const Reader = require('./components/Reader')

var leitor = new Reader

async function main() {
    var dados = await leitor.Read('./controleDeInvestimentos.csv')
    console.log(dados)
}

main()