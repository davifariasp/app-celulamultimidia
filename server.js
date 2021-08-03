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

    //get /about
    /*app.get('/guia', (req, res) => {
        var users = [{
            id:'1',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/300/300'
        }, {
            id: '2',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/400/300'
        }, {
            id: '3',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/500/300'
        }]

        res.render('pages/guia', {
            //usuarios vai receber o vetor user
            usuarios: users
        })
    })*/

    //get / contact
    app.get('/contact', (req, res) => {
        res.render('pages/contact')
      })

    //post /contact
    app.post('/', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
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
        }];

        /*suaLista.add(questions1);

        let result = suaLista.readAllList();*/

        res.render('pages/guiateste', {
            questoes1: questions1
        })

        //suaLista.add(questions1);
        
        //res.send(suaLista.readAllList());

        
    });