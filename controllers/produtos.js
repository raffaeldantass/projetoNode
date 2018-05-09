
const listagemProdutos = (request, response) => {  
	request.livrosDAO.lista(
		(livros) => response.render('produtos/lista.ejs', {
			msgErro: "",
			livros: livros
		}),
		next
	)     
}

// const criaBody = (request, response, next) => {
// 	let livroString = ""

// 	request.on('data', chunck => {
// 		livroString += chunck
// 	})

// 	request.on('end', () => {
// 		request.body = queryString.parse(livroString)
// 		next()
// 	})
// }

const cadastroProdutos = (request, response) => {
		const livro = request.body
		request.livrosDAO.cadastra(
			livro, 
			() => response.redirect('/produtos'),
			next
		)
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