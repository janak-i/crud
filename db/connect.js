const mongoose=require("mongoose");
uri="mongodb+srv://janakl:1rpi820LMg97z36m@cluster0.s1w8wxs.mongodb.net/?retryWrites=true&w=majority";
const connectDB=()=>{
    console.log("database connected")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,


    });

};

module.exports=connectDB;
