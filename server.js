// Importa o módulo Express para criar o servidor web
import express from 'express';

// Importa a função para conectar ao banco de dados
import conectarAoBanco from './src/config/dbConfig.js';

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Cria uma instância do servidor Express
const app = express();

// Habilita o parser JSON para lidar com requisições JSON
app.use(express.json());

// Inicia o servidor na porta 3000 e imprime uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Função assíncrona para obter todos os posts do banco de dados
async function getTodosPosts(params) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}

// Define uma rota GET para "/posts"
app.get("/posts", async (req, res) => {
    // Obtém todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 e os posts no formato JSON
    res.status(200).json(posts);
});

//function buscarPostPorID(id){ 
     //return posts.findIndex((post) =>{
        //return post.id === Number(id)
     //})
//}

//app.get("/posts/:id", (req, res) =>{
   // const index = buscarPostPorID(req.params.id) 
   //res.status(200).json(posts[index]);
//});


