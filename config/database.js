import mongoose from "mongoose";

mongoose.connect('mongodb+srv://golischevskyl:dOc4ZCNBgNyVxcGN@cluster0.ei8ugul.mongodb.net/')
.then(() => {
    console.log(('DB conectada :)'));
}).catch(()=>{
    console.log('DB failed :(');
})