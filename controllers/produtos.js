const mysql = require('mysql')

const poolDeConexoes = mysql.createPool({
	user: 'root',
	password: 'root',
	database: 'cdc',
	host: 'localhost'
})

const listagem = (request, response) => {
	poolDeConexoes.query("SELECT * FROM livros", (erro, listaDoBanco) => {
		if (erro) {
			console.log("erro")
		} else {
			response.render('produtos/lista.ejs', {
				msgErro: "",
				livros: listaDoBanco
			});
		}
	})
}

const cadastro = (request, response) => {
	console.log('Cadastro')
}

module.exports = {
	listagem
}