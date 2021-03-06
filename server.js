const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

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
                //Icones únicos
                let tagUx = "../images/icones/icon-ux.png"
                let tagJogos = "../images/icones/icon-jogos.png"
                let tagIhc = "../images/icones/icon-ihc.png"
                let tagApp = "../images/icones/icon-app.png"
                let tagCatalogo = "../images/icones/icon-catalogo.png"

                //Icones combinados
                let tagUxJogos = "../images/icones/icon-uxjogos.png"
                let tagUxCatalogo = "../images/icones/icon-uxcatalogo.png"
                let tagUxIhc = "../images/icones/icon-uxihc.png"
                let tagIhcApp = "../images/icones/icon-ihcapp.png"
                let tagIhcJogos = "../images/icones/icon-ihcjogos.png"
                let tagIhcCatalogo = "../images/icones/icon-ihccatalogo.png"
                let tagCatalogoApp = "../images/icones/icon-catalogoapp.png"
                let tagCatalogoJogos = "../images/icones/icon-catalogojogos.png"
                let tagAppJogos = "../images/icones/icon-appjogos.png"

                var produtosCard = [{
                    ano: 2020,
                    produtos: [{
                        tag: tagUxCatalogo,
                        title: " GAPI: Um guia online para apoio ao ensino de métodos de pesquisa com usuários ",
                        autores:"Izac Sidarta; Ticianne Darin",
                        descricao:"O artigo apresenta desenvolvimento do primeiro módulo de um guia online para alunos cuja finalidade é aprofundamento e estudo destes métodos de pesquisa em IHC",
                        link:"#"}]         
                    },
                    {
                    ano: 2019,
                    produtos: [{
                        tag: tagUxJogos,
                        title: "Experiência do Usuário em Jogos Digitais: Uma Catalogação de Instrumentos de Avaliação",
                        autores:"Bosco Borges; Izac Sidarta; Antonio Marcos de Souza; Bianca Coelho; Ticianne Darin",
                        descricao:"Esta pesquisa visa prover um catálogo de instrumentos de avaliação de UX em jogos, reunindo informações para orientar a seleção desses instrumentos no planejamento da avaliação de experiência do jogador.",
                        link:"#" },
                        {
                        tag: tagIhcCatalogo,
                        title: "Which Instrument Should I Use? Supporting Decision-Making About the Evaluation of User Experience",
                        autores:"Bianca Coelho; Ticianne Darin; Bosco Borges",
                        descricao:"We compiled information about 116 instruments aiming to assist researchers and practitioners in making informed choices about which instruments can support UX data collection, according to their research goals. In addition to that.",
                        link:"#" },
                        {
                        tag: tagAppJogos,
                        title: "Clube do Resgate: Um jogo digital baseado em localização para a conscientização contra o abandono de animais conscientização contra o abandono de animais",
                        autores:"Mateus Pinheiro; Espedito Mesquita; Izac Sidarta; David Miranda; Patrick de Araújo",
                        descricao:"Hoje, o ato de abandonar animais domésticos na rua, além de agravar o problema, configura crime federal, mas mesmo tal medida não impede que essa prática ocorra por todo o território nacional. ",
                        link:"#" },
                    
                    
                    
                    ]           
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

        //Guia Home
        app.get('/guia', (req, res) => {
            res.render('pages/guia', {
                idPage: 'guia'
            })
        });

        app.get('/guiastart', (req, res) => {
            res.render('pages/guiastart', {
                idPage: 'guiastart'
            })
        });

    // NÃO UTILIZADO MAIS
    // app.post('/enviaremail', (req, res) => {
    

    // /*Variaveis vindas através do form

    // req.body.formNome
    // req.body.formEmail
    // req.body.formAssunto
    // req.body.formMsg*/

    // //Enviando o email
    // transporter.sendMail({
    //     from: "Davi <davi.informatica8@gmail.com>",
    //     to: req.body.formEmail,
    //     subject: req.body.formAssunto,
    //     text: req.body.formMsg
    // }).then(message => {
    //     console.log(message)
    // }).catch(err => {
    //     console.log(err)
    // })

    // res.redirect('/')
    // })

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


    