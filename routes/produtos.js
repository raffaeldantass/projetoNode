const Conexao = require('../db/conexao')
const LivrosDAO = require('../db/livrosDAO2')
const ProdutosController = require('../controllers/produtos')

const cadastraRotas = (servidor) => {
	// Recebe um request e manda uma resposta
	servidor
				.use((request, response, next) => {
					request.conexao = Conexao()
					request.livrosDAO = new LivrosDAO(request.conexao)
					next()
				})
				.get("/produtos", ProdutosController.listagem)
				.get("/produtos/form", ProdutosController.form)
				.post("/produtos", ProdutosController.cadastro)
				.use((request, response, next) => {
					request.conexao.end()
					next()
				})
}

module.exports = cadastraRotas