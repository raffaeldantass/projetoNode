const livrosDAO = require('../db/livrosDAO')

const listagemProdutos = (request, response) => {  
	livrosDAO.lista(
		(livros) => {
			response.render('produtos/lista.ejs', {
					msgErro: "",
					livros: livros
			}) 
		},
		(erro) => {
			console.log("Deu ruim\n", erro)
			response.render('erros/500', {
				erro
			})
		}
	)        
}

function cadastroProdutos(request, response){
	livrosDAO.cadastra  
}

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos
}