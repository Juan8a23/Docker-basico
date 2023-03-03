import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model("Animal", new mongoose.Schema({
    tipo: String,
    estado: String,
}));

const app = express();

mongoose.connect('mongodb://juan:password@monguito:27017/animals?authSource=admin');

app.get('/', async (_req, res) => {
    console.log("Mostrando cambio...");
    const animals = await Animal.find();
    return res.send(animals);
});

app.get('/crear', async (_req, res) => {
    console.log("Creando...");
    await Animal.create({ tipo: "Perro", estado: "Feliz" });
    return res.send('ok');
});

app.listen(3000, () => console.log('Server running on port 3000'));