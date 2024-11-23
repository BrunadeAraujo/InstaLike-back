import express from "express";

import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    app.posts("/post", postarNovoPost)
}
export default routes;