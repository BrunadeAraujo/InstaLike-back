import { getTodosPosts } from "../models/postsModels.js";

export async function listarPosts (req, res)
{
    //chama a função para buscar os posts
    const posts =  await getTodosPosts();
    //envia uma resposta HTTP com status (OK) 
    res.status(200).json(posts);
}
export async function postarNovoPost(req, res) {
     const novoPost = req.body;
     try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
     } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"})
     }
}