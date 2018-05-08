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
	
	cadastra(livro, callbackSucesso, callbackDeuRuim) {
		this.conexao.query('INSERT INTO livros SET ?', livro, (erro) => {
			erro
			? callbackDeuRuim(erro)
			: callbackSucesso()
		})
	}
}