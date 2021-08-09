const express = require('express')
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
app.set('layout','./layouts/layout.ejs')
app.use(express.urlencoded({
    extended: true
})) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//rotas
    //Rota das páginas
        //Home
        app.get('/', (req, res) => {
            res.render('pages/home', {idPage: 'home'})
        })

        //Nossos trabalhos
            //Artigos
            app.get('/nossostrabalhos/artigos', (req, res) => {
                res.render('pages/artigos', {idPage: 'artigos'})
            })

            //Produtos
            app.get('/nossostrabalhos/produtos', (req, res) => {
                let tagUx = "../images/icones/icon-ux.png"
                let tagJogos = "../images/icones/icon-jogos.png"
                let tagIHC = "../images/icones/icon-ihc.png"
                let tagApp = "../images/icones/icon-app.png"
                let tagCatalogo = "../images/icones/icon-catalogo.png"

                var produtosCard = [{
                    ano: 2020,
                    produtos: {
                        tag: tagUx,
                        title: " GAPI: Um guia online para apoio ao ensino de métodos de pesquisa com usuários ",
                        autores:"Izac Sidarta; Ticianne Darin",
                        descricao:"O artigo apresenta desenvolvimento do primeiro módulo de um guia online para alunos cuja finalidade é aprofundamento e estudo destes métodos de pesquisa em IHC",
                        link:"http://google.com.br"}           
                    },
                    {
                    ano: 2019,
                    produtos: [{
                        tag: tagUx,
                        title: "Experiência do Usuário em Jogos Digitais: Uma Catalogação de Instrumentos de Avaliação",
                        autores:"Bosco Borges; Izac Sidarta; Antonio Marcos de Souza; Bianca Coelho; Ticianne Darin",
                        descricao:"Esta pesquisa visa prover um catálogo de instrumentos de avaliação de UX em jogos, reunindo informações para orientar a seleção desses instrumentos no planejamento da avaliação de experiência do jogador.",
                        link:"https://www.youtube.com/watch?v=ABnf5H3ww4M&ab_channel=BujidoCavacoChannel" },
                        {
                        tag: tagUx,
                        title: "Experiência do Usuário em Jogos Digitais: Uma Catalogação de Instrumentos de Avaliação",
                        autores:"Bosco Borges; Izac Sidarta; Antonio Marcos de Souza; Bianca Coelho; Ticianne Darin",
                        descricao:"Esta pesquisa visa prover um catálogo de instrumentos de avaliação de UX em jogos, reunindo informações para orientar a seleção desses instrumentos no planejamento da avaliação de experiência do jogador.",
                        link:"https://www.youtube.com/watch?v=jmePZFX8nPw&t=1709s&ab_channel=MartinsCds" }]           
                    }];
 
                res.render('pages/produtos', {
                    idPage: 'produtos',
                    cardProdutos: produtosCard
                })
            })

            //Projetos
            app.get('/nossostrabalhos/projetos', (req, res) => {
                res.render('pages/projetos', {idPage: 'projetos'})
            })
        
        //A Célula
        app.get('/acelula', (req, res) => {
            res.render('pages/acelula', {idPage: 'acelula'})
        })

        //Fale Conosco
        app.get('/faleconosco', (req, res) => {
            res.render('pages/faleconosco', {idPage: 'faleconosco'})
        })

        //Guia
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
                questoes: questions,
                idPage: 'guia'
            })
        });

    //post /contact
    app.post('/enviaremail', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.formNome + '! Responderemos em breve!')
    })

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


    