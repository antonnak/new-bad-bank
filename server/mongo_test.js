const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) {
        console.log('Connection error:', err);
    } else {
    console.log('Connected!')}
    db.close();
});