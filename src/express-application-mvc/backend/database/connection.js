const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://Shubhanshu:qweasd123@tvastracluster.9yew0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    console.log(`MongoDb connected : ${conn.connection.host}`);
}catch(err){
    console.log(err);
    process.exit(1);
}
}
module.exports=connectDB;