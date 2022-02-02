const express = require("express")


const hbs = require("hbs")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'hbs')
app.set("views", `${__dirname}/views`)


const person = {
    name: "Brendan",
    lastName: "Eich",
    age: {
        year: 1961,
        month: 08,
        day: undefined
    },
    studies: ["Santa Clara University", "Illinois University"],
    positions: ["CEO of mozilla ", "CTO of mozilla", "CEO of brave software"]

}



app.get('/', (req, res) => {
    res.render("home", person)
})

app.get('/about', (req, res) => {


    res.render("about", person)
})

app.get('/works', (req, res) => {
    res.render("works", person)
})

app.get('/photos', (req, res) => {
    res.render("photos", person)
})


app.listen(5005, () => console.log('SERVER RUNNING'))