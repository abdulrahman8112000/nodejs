const mongodb=require('mongodb');
let _db;
const MongoClient=mongodb.MongoClient;
const mongoConnect=callback=>{
MongoClient.connect('mongodb+srv://abdulrehman:drowssap@cluster0.pxkqn.mongodb.net/?retryWrites=true&w=majority').then(client=>{
  console.log('connected');
  _db=client.db('shop');
  callback();
}).catch(err=>{
  console.log(err);
  throw err;
})
}

const getDb=()=>{
  if(_db){
    return _db;

  }

  throw 'no databse found'
}
module.exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
