// Função construtora
const LivrosDAO = require('../db/livrosDAO2')
const Conexao = require('../db/conexao')
const queryString = require('query-string')

const listagemProdutos = (request, response) => {  
	const conexao = Conexao()
	const livrosDAO = new LivrosDAO(conexao)
	livrosDAO.lista(
		(livros) => response.render('produtos/lista.ejs', {
			msgErro: "",
			livros: livros
		}),
		(erro) => response.render('erros/500', {
			erro
		})
	)  
	conexao.end()     
}

const cadastroProdutos = (request, response) => {
	let livroString = ""

	request.on('data', chunck => {
		livroString += chunck
	}),
	request.on('end', () => {
		const livro = queryString.parse(livroString)
		const conexao = Conexao()
		const livrosDAO = new LivrosDAO(conexao)

		livrosDAO.cadastra(
			livro, 
			() => response.redirect('/produtos'),
			erro => response.render('erros/500.ejs', {erro})
		)
	})
} 

const formulario = (request, response) => {
	response.render('produtos/form.ejs', {
		validationErrors: []
	})
}

module.exports = {
    listagem: listagemProdutos, 
		cadastro: cadastroProdutos,
		form: formulario
}