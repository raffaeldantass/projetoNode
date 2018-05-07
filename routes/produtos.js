const mysql = require('mysql')

const poolDeConexoes = mysql.createPool({
	user: 'root',
	password: 'root',
	database: 'cdc',
	host: 'localhost'
})

const cadastraRotas = (servidor) => {
	// Recebe um request e manda uma resposta
	servidor.get("/produtos", (request, response) => {
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
	})
}

module.exports = cadastraRotas