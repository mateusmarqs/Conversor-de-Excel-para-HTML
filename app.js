const { mainModule } = require('process')
const Reader = require('./components/Reader')
const Processor = require('./components/Processor')
const Table = require('./components/Table')

var leitor = new Reader

async function main() {
    var dados = await leitor.Read('./controleDeInvestimentos.csv')
    var dadosProcessados = Processor.processer(dados)
    var investimentos  = new Table(dadosProcessados)

    console.log(investimentos.rowCount)

}

main()