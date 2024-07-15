const express = require('express');
const client = require('./database');
const app = express();

app.get('/recordings', async (req, res) => {
    try {
        const database = client.db('idle_db');
        const collection = database.collection('recordings');
        const dados = await collection.find({}).toArray();
        res.json(dados);
    } catch (e) {
        console.error(e);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/members', async (req, res) => {
    try {
        const database = client.db('idle_db');
        const collection = database.collection('members');
        const dados = await collection.find({}).toArray();
        res.json(dados);
    } catch (e) {
        console.error(e);
        res.status(500).send('Erro ao buscar dados');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});