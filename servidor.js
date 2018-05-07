//Cria servidor
let http = require('http');

//Funções de callback
let servidor = http.createServer(
    (pedido, resposta) => {
        resposta.end("oi");
    }
); 


//Levanta servidor e manda ouvir a porta 3000
servidor.listen(3000);