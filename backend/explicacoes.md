/*
// Rota: conjunto app.get + recurso
// Recurso: users (usuario)
// Métodos HTTP = GET, POST, PUT, DELETE



// -- Métodos HTTP
// GET =  Buscar uma informação (lista, item, etc) // navegador faz requisições desse tipo por padrão
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// -- Parâmetros
// Query: http://localhost:3333/users?search=diego => ?search=diego (query param)
// - servem para filtrar/ buscar coisas na aplicação (opcionais)
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// - ex: deletar um usuario de id 1: DELETE http://localhost:3333/users/1
// Body: http://localhost:3333/users/ (Identificar um recurso) (corpo da requisição)
// - onde vem muitos dados / informações compostas / complxas

// '/users/:id' -> esse : indica que id é um parametro
app.get('/users/:id', (request, response) => {
    console.log(request.query) // mostra todos os query params
    console.log(request.params) // mostra todos os route params
    console.log(request.body) // mostra todos os body

    return response.json( {  message: "Hello World" } )
}) // isso é uma rota
*/


## Formas de lidar com bancos de dados
->  Driver nativo, Query builder, ORM
1- Diver nativo
ex: sqlite3
Permite executar as querys do banco de dados pelo node
não fornece nenhuma abstração
Você tem que escrever da mesma forma que escreveria no banco de dados
2- Query builder
Ex: Knex.js
Você escrever suas querys com js
Ele converte isso para as as querys do banco
3- ORM
Ex: 
Maior nivel de abstração
Cada tabela no banco é representada por uma classe no js
cada linha de retorno vai ser um objeto derivado dessa classe
