const server = require('./servidor.js')
const cadastraRotaProdutos = require('./routes/produtos')
cadastraRotaProdutos(server)

//Levanta servidor e manda ouvir a porta 3000
server.listen(3000);