const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
    name: {
        type: String
    },
    mood: {
        type: String
    },
    desc: {
        type: String
    },
    image64:{
        type:String
    }
},{timestamps:true});

mongoose.models = {}
const User = mongoose.model('image', userSchema);

// exporting userSchema using module 
module.exports = User;