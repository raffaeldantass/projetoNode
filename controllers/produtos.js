const pool = require('../db/pool')
const listaLivros = require('../db/listaLivros')

function listagemProdutos(request, response){
        
    listaLivros((erro, livros) => {
        if(erro){
            console.error("Deu ruim")
        } else {
            response.render('produtos/lista.ejs', {
                msgErro: "",
                livros: livros
            }) 
        }
    })        
}

function cadastroProdutos(request, response){
    console.log("Cadastro")    
}

module.exports = {
    listagem: listagemProdutos, 
    cadastro: cadastroProdutos
}