const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function connect() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB Atlas");
    } catch (e) {
        console.error(e);
    }
}

connect();

module.exports = client;