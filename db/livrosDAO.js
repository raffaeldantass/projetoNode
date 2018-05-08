const lista = (conexao, callbackSucesso, callbackDeuRuim) => {
	conexao.query(
		'SELECT * FROM livros', 
		(erro, lista) => erro 
			? callbackDeuRuim(erro) 
			: callbackSucesso(lista)
	)
}

const cadastra = (conexao) => {
	conexao.query((erro,conexaoNova) => {

	})
}

module.exports = (conexao) => {
	return {
		lista: (callbackSucesso, callbackDeuRuim) => lista(conexao, callbackSucesso, callbackDeuRuim),
		cadastra: cadastra
	}
}