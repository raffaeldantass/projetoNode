
const listagemProdutos = (request, response, next) => {  
	request.livrosDAO.lista(
		(livros) => response.format({
			html: () => response.render('produtos/lista.ejs', {
				msgErro: "",
				livros: livros
			})
			,json: () => response.send(livros)
		})
		,next
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

const cadastroProdutos = (request, response, next) => {
	const livro = request.body
	request
		.assert('titulo', 'Titulo é obrigatório')
		.notEmpty()
	
	request
		.assert('preco', 'Preço precisa ser numerico')
		.isNumeric()

	// request.asyncValidationErrors()
	// 	.then(() => request.livrosDAO.cadastra(
	// 			livro
	// 			,() => response.redirect("/produtos")
	// 			,next
	// 	))
	// 	.catch(validationErrors => response.render('produtos/form.ejs', {validationErrors}))

		request.asyncValidationErrors()
			.catch(validationErrors => response.render('produtos/form.ejs', {validationErrors}))

		request.asyncValidationErrors()
			.then(() => request.livrosDAO.cadastra(livro).catch(next))
			.then(() => response.redirect('/produtos'))
			.catch(() => {}) //só para parar de dar warnings na execução do node
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