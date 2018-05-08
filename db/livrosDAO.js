const pool = require('../db/pool')

const lista = (callbackSucesso, callbackDeuRuim) => {
	pool.query('SELECT * FROM livros', (erro, lista) => {
		if(erro) {
			callbackDeuRuim(erro)
		} else {
			callbackSucesso(lista)
		}
	})
}

const cadastra = () => {

}

module.exports = {
	lista: lista,
	cadastra: cadastra
}