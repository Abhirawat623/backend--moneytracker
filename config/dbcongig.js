const mongooose = require('mongoose');

const connectDb= async()=>{
    try{
    await mongooose.connect(process.env.DATABASE_URI)
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDb;