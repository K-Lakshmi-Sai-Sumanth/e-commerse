const mongoose = require("mongoose")


const connectDb = async (req, res)=>{
    try{
        const connection = await mongoose.connect("mongodb+srv://lakshmisaisumanth9:u1IDUNKNc3VNK5sq@e-commerse.is70r.mongodb.net/e-commerse")
        console.log('mongoose connected successfuly...')
    }catch(err){
        console.log('Data Base not connected...', err)
    }
   
}

module.exports = connectDb