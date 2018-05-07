//Cria servidor
let express = require('express');
let server = express();

server.get("/", (request, response) => {
    response.send("<h1> Casa do código </h1>");
})

//Levanta servidor e manda ouvir a porta 3000
server.listen(3000);