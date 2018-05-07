//Cria servidor
const express = require('express');
const server = express();

// Recebe um request e manda uma resposta
server.get("/", (request, response) => {
    response.send("<h1> Casa do código </h1>");
})

//Levanta servidor e manda ouvir a porta 3000
server.listen(3000);