const express = require('express')
const faker = require('faker')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

//configurando lista
let List = require('./public/js/insertDataGuia')
let suaLista = new List()

//configurando server
app.use(express.json());
app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(express.urlencoded({
    extended: true
})) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//rotas
    //get /home
    app.get('/', (req, res) => {
        res.render('pages/home')
    })

    //post /contact
    app.post('/enviaremail', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.formNome + '! Responderemos em breve!')
    })

    app.get('/guia', (req, res) => {

        var questions = [{
            id_q:1,
            title:"Quem descobriu o Brasil?",
            options:[
                {
                title:"Pedro Álvares Cabral",
                value:"p1"},
                {
                title:"Pedro Álvares Cabrol",
                value:"p2"},
                {
                title:"Pedro Álvares Cabrel",
                value:"p3"},
                {
                title:"Pedro Álvares Cabril",
                value:"p4"}
                ]
        }, {
            id_q:2,
            title:"Qual meu nome?",
            options:[
                {
                title:"Davi",
                value:"p1"},
                {
                title:"Farias",
                value:"p2"},
                {
                title:"Pinheiro",
                value:"p3"},
                {
                title:"Todas as alternativas",
                value:"p4"}
                ]
        }];

        //suaLista.add(questions);

        //res.send(suaLista.readAllList());

        res.render('pages/guia', {
            questoes: questions
        })
    });

    app.get('/guiateste', (req, res) => {
        
        var questions1 = [{
            id_q:1,
            title:"Quem descobriu o Brasil?",
            options:[
                {
                title:"Pedro Álvares Cabral",
                value:"p1"},
                {
                title:"Pedro Álvares Cabrol",
                value:"p2"},
                {
                title:"Pedro Álvares Cabrel",
                value:"p3"},
                {
                title:"Pedro Álvares Cabril",
                value:"p4"}
                ]
        }, {
            id_q:2,
            title:"Qual meu nome?",
            options:[
                {
                title:"Davi",
                value:"p1"},
                {
                title:"Farias",
                value:"p2"},
                {
                title:"Pinheiro",
                value:"p3"},
                {
                title:"Todas as alternativas",
                value:"p4"}
                ]
        }, {
            id_q:3,
            title:"Pergunta qualquer?",
            options:[
                {
                title:"Pergunta",
                value:"p1"},
                {
                title:"Qualquer",
                value:"p2"},
                {
                title:"Para",
                value:"p3"},
                {
                title:"Teste",
                value:"p4"}
                ]
        }];

        /*suaLista.add(questions1);

        let result = suaLista.readAllList();*/

        res.render('pages/guiateste', {
            questoes1: questions1
        })

        //suaLista.add(questions1);
        
        //res.send(suaLista.readAllList());

        
    });


    