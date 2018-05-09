const superTest = require('supertest')
const servidor = require('../../servidor')
const request = superTest(servidor)

describe("Controller Produtos", () => {
	it("Tem que listar produtos", (done) => {
		request
			.get('/produtos')
			.set("Accept", "application/json")
			.expect("Content-type", "application/json; charset=utf-8", done)
	})

	it("Rota que não existe 404", (done) => {
		request
			.get('/aaaa')
			.expect(404, done)
	})
})