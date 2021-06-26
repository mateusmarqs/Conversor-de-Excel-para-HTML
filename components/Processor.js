class Processor {
    static processer(dado) {
        var a = dado.split('\r\n') // Seprar por linha
        var rows = []

        a.forEach(row => {
            let array = row.split(',')
            rows.push(array)
        })
        return rows
    }
}

module.exports = Processor