
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({ path: '../.env' })

const DB ="mongodb+srv://online-store:UAZMCLZR6euOKRlf@cluster0.gj0hx.mongodb.net/image-gallery?retryWrites=true&w=majority";

mongoose.connect(DB)
.then(() => {
    console.log(`Connected to MongoDB Atlas`)
})
.catch((err)=>{
    console.log(`Not Connected! ${err}`)
})

module.exports = mongoose;