const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let dataBase='e-comm';


async function dbConnection(){
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('products');

}
module.exports = dbConnection;