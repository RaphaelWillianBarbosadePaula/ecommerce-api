import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo à API de E-commerce! em Node.js + Express - Teste TSC Watch");
});

type User = {
    id: number; 
    nome: string;
    email: string;
}

let id = 0;
let usuarios: User[] = [];

app.get("/users", (req: Request, res: Response) => {
    res.send(usuarios);
});

app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
})

app.post("/users", (req: Request, res: Response) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuário criado com sucesso!"
    })
});

app.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuário alterado com sucesso!",
        user
    });
});

app.delete("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuário excluído com sucesso!"
    })
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});