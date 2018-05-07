//Cria servidor
const express = require('express');
const server = express();

server.use(express.static('./public'))

// Recebe um request e manda uma resposta
server.get("/produtos", (request, response) => {
    response.render('produtos/lista.ejs', {
        msgErro: "",
        livros: [
            {
                titulo: "Android",
                preco: 50,
                descricao: "Teste teste"
            }
        ]
    });
})

//Levanta servidor e manda ouvir a porta 3000
server.listen(3000);