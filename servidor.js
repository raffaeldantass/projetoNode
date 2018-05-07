//Cria servidor
let express = require('express');
let servidor = express();

servidor.get("/", () => {
    console.log("home");
})

//Levanta servidor e manda ouvir a porta 3000
servidor.listen(3000);