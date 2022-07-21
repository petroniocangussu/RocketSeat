/*app.route('/').get( (req, res) => res.send("hello"))
app.route('/sobre').get( (req, res) => res.send("hello sobre"))
app.route('/').post( (req, res) => res.send(req.body))
middleware*/
//app.use(express.json())
//let author = "Petrônio"
/*app.route('/').get( (req, res) => res.send(author))
app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})
app.route('/:identificador').delete( (req, res) => {
    author = ""
    res.send(req.params.identificador)
})
app.route('/').post( (req, res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})
app.route('/').get( (req, res) => res.send("Oi")) 
app.route('/:variavel').get( (req, res) => res.send(req.params.variavel)) 
app.route('/identidade/:nome').get( (req, res) => res.send(req.params.nome))

app.route('/').get( (req, res) => res.send(req.query.nome))
app.route('/about/user').get( (req, res) => res.send(req.query))*/

const express = require('express')
const axios = require('axios');
const app = express()
app.listen('3000')

app.route('/').get( (req, res) => {
    axios.get('https://api.github.com/users/jakeliny')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})