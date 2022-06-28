const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        { 
            title: "D",
            message: " - Desenvolvedor aplicações/serviços de forma fácil."
        },
        {
            title: "E",
            message: " - EJS usa JavaScript para renderizar HTML."
        },
        {
            title: "M",
            message: " - Muito bom."
        },
        {
            title: "A",
            message: " - Assim fica fácil de aprender."
        },
        {
            title: "I",
            message: " - Inteligente modo."
        },
        {
            title: "S",
            message: " - Só sucesso."
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor funcionando");