const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://surbhi:o7qQngS1WWefE6q2@cluster0.w2h1nvu.mongodb.net/?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull');
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose