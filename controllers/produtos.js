// Função construtora
const LivrosDAO = require('../db/livrosDAO2')
const Conexao = require('../db/conexao')

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

const cadastroProdutos = (request, response) => livrosDAO.cadastra  

const deletaProduto = (request, response) => livrosDAO.deletaProduto(produto) 

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos
}