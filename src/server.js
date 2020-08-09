//Dados

const proffys = [
    {
        name: "Noa Prada",
        avatar: "https://avatars3.githubusercontent.com/u/35732254?s=400&u=51ff4f9d6853b9b7659fefe34b584c8ab914b0cc&v=4", whatsapp: "998543256",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]

    },

    {
        name: "Maya Borges",
        avatar: "https://avatars2.githubusercontent.com/u/5827558?s=460&u=01787d70f64d58b817d318d0f91553db1e65b40b&v=4", whatsapp: "998543256",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]

    },

    {
        name: "Layla Borges",
        avatar: "https://avatars2.githubusercontent.com/u/5172592?s=460&u=6e4f03651f9edd2be274bf2868cc962f25ccf09f&v=4", whatsapp: "998543256",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]

    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)


        //adicionar dados a lista proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    //se nao, mostrar a pagina
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio e configuração do servidor
server
    //configurar arquivos estáticos(css, scripts, imagens)
    .use(express.static("public"))
    // rotas a aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //start do servidor
    .listen(5500)