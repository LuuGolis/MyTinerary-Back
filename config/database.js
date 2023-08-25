import mongoose from "mongoose";

mongoose.connect(process.env['DATABASE_URL'])
.then(() => {
    console.log(('DB conectada :)'));
}).catch(()=>{
    console.log('DB failed :(');
})