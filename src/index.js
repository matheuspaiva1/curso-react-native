const express = require('express') // importamos
const app = express() // atribuimos as funções a variavel
app.use(express.json())

// query params (listar, filtrar as minhas informações)
// route params(identificar recursos -> atualizar e deletar)
// request body(criar ou editar um recurso -> JSON)

const projetos = 

app.get("/projeto", (request, response) => {
    const {title, dev} = request.query
    console.log(title)
    console.log(dev)

    return response.json([
        "Projeto 1",
        "Projeto 2"
    ])

})

app.post('/projeto', (request, response) => {
    const body = request.body
    console.log(body)
    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])

})

app.put('/projeto/:id', (request, response) => {
    const params= request.params
    console.log(params)

    return response.json([
        "Projeto 4",
        "Projeto 2",
        "Projeto 3"
    ])
})
//http://localhost:3333/projeto/4



app.delete('/projeto/:id', (request, response) => {
    return response.json([
        "Projeto 2",
        "Projeto 3"
    ])
})



app.listen(3333, () => {
    console.log("Back-end started 🚀")
})