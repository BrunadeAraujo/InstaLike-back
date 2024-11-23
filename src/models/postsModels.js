import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//função assincrona para buscar todos os posts do banco de dados
export async function getTodosPosts(){
    //seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    //Seleciona a coleção posts dentro do banco de dados
    const colecao = db.collection("posts");
    //Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}