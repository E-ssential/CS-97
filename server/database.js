var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://admin:test1234@cluster0-yz77d.mongodb.net/test?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});