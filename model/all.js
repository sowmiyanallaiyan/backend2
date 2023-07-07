const mongoose=require('mongoose')

const alienschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:
    {
        type:String,
        required:true
    },
    description:
    {
      type:String,
      required:true,
    },
    detail:
    {
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('Alien',alienschema)