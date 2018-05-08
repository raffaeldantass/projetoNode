module.exports = class LivrosDAO {
	constructor(conexao) {
		this.conexao = conexao
	}

	lista(callbackSucesso, callbackDeuRuim) {
		this.conexao.query(
			'SELECT * FROM livros', 
			(erro, lista) => erro 
				? callbackDeuRuim(erro) 
				: callbackSucesso(lista)
		)
	}
	
	cadastra() {
		this.conexao
	}
}