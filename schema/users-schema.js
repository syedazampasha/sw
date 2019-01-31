var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email:{
        type: String,
        unique: true,
        index: { unique: true },
        required: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }},
    {collection:"users"});
    
//create model that uses schema
module.exports =  mongoose.model('Users',users,'users');