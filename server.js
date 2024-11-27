import express from "express";
import routes from "./src/routes/postsRoutes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.static("uploads"))

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
