const express = require('express') // importamos
const { request, response } = require('express')
const app = express() // atribuimos as funções a variavel

app.get("/projeto", (request, response) => {
    return response.json([
    
        "Projeto 1",
        "Projeto 2"
    ])

})

app.post('/projeto', (request, response) => {
    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])

})
app.put('/projeto/:id', (request, response) => {
    return response.json([
        "Projeto 4",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.delete('/projeto/:id', (request, response) => {
    return response.json([
        "Projeto 2",
        "Projeto 3"
    ])
})
//http://localhost:3333/projeto/4




app.listen(3333, () => {
    console.log("Back-end started 🚀")
})