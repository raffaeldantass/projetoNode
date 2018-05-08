
const produtosController = require('../controllers/produtos')

const cadastraRotas = (servidor) => {
	// Recebe um request e manda uma resposta
	servidor
				.get("/produtos", produtosController.listagem)
				.get("/produtos/form", produtosController.form)
				.post("/produtos", produtosController.cadastro)
}

module.exports = cadastraRotas