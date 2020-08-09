const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(() => {
    //Inserir dados

    proffyValue = {
        name: 'Maya Borges',
        avatar: 'https://lh3.googleusercontent.com/ai4ISn_gjXLnvHbVUQBS4gg1Lt0T_ZqTIM0oh92mt63aSv58-gBzeDt5Ua8_Lqjek9rEfPUjqIKd2ZYEAOH1YK-ARVd1wNGDzjXKeFNqtf5r0FGYfkeSW2iYRlwoWkgcCclJAsRzYeYEFFTH2lCS_CxYegy_xTd3HAilSedoX3K_QFKTQFWYQYQl-zJPK32h7-8AWNY0PWmnw3TSBeVmFq_6vqQ2B6JjuG-kth44OHbiE90dT2I3subxA4yI3ZoXHDjLyXiBR2mHdSwX62AOneCyrUxk7YyOvZjeNFqOcgUkvQiRTiQSVMT4rYJwaz3E6mKT0CB2P-pvdBp3ft1gnuCK3-K28IhYzqgsRBb-3wbTeLO-kbTsB_6BTIBr_EitjO09C76zO8UiDiUNSfVZHYIg6RfFHLE1AoiP-CgNZaHQtSXVqP3njKJh1W16mEadU1_rhpRwEWklqibgT9VIgiQ_x-Vhc3ryObNDc9xhJ8FFt7rulk5GDl4nAz34CuVLJjnC-zIKO65r__Qz7eBvweoBa0nTvhhF_l_4wro7eyHkKdtJzYFiAKNFDF83ywEbu6Ovcz0JmMb-UXf-oslm3iSZQFGg4pLGktKgb_8wznwBLH9RJIoHaxiDsPWAhdVKVeLjHdOHO7tNXPtNoMnSqrqhqYTlhCJae8v4wu4PoTlX3BWlcv7aFmxlJ5j9eA=w1630-h2172-no?authuser=0',
        whatsapp: '2199884558',
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

    }

    classValue = {
        subject: "Química",
        cost: "20",
        //proffy id vem pelo banco autoincrement boco
    }

    classScheduleValue = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ]

    //createProffy(db, { proffyValue, classValue, classScheduleValue })
    //Consultar os dados inseridos

})