import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
    res.send("Hola mundo");
});

app.listen(port, () => {
    console.log("Servidor corriendo en puerto 3000");
});