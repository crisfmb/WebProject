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
        avatar: "https://avatars3.githubusercontent.com/u/35732254?s=400&u=51ff4f9d6853b9b7659fefe34b584c8ab914b0cc&v=4", whatsapp: "998543256",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]

    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}


const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
    //configurar arquivos estáticos(css, scripts, imagens)
    .use(express.static("public"))
    // rotas a aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)