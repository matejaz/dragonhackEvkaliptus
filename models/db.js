const mongoose = require('mongoose');

var dbURI = "mongodb://localhost/dhEvkaliptus";
if (process.env.NODE_ENV === 'production'){
    dbURI=process.env.MONGODB_CLOUD_URI;
}

mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected ${dbURI}.`);
});
  
mongoose.connection.on('error', napaka => {
    console.log('Mongoose error with conn: ', napaka);
});
  
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected.');
});

require("./locations")