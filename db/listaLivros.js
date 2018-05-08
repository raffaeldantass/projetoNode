module.exports = (callback) => {
	setTimeout(() => {
		callback(null, [
			{
				titulo: 'Android',
				preco: 500,
				descricao: 'livro de android'
			}
		])
	})
}