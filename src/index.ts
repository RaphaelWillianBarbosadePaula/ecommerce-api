import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo à API de E-commerce! em Node.js + Express - Teste TSC Watch");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});