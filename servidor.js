const express = require('express')
// hoisting
const servidor = express()

// callback pra qualquer rota
servidor.use(express.static('./public'))
servidor.use(express.urlencoded())
servidor.use(express.json())

require('./routes/produtos')(servidor)
require('./routes/home')(servidor)

servidor.use((req, resp) => {
	resp.render('erros/500.ejs', {erro: '404 page not found'})
})

servidor.use((erro, req, resp, next) => {
	resp.format({
		html: () => resp.render('erros/500.ejs', {erro}),
		json: () => resp.send(erro),
		default: () => {
			resp.send('Tipo não suportado')
		}
	})
})

module.exports = servidor