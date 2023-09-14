
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    //_id asignada automaticamente x mongoose
    name: { type: String, required:true },
    lastName: { type: String, required:true },
    img: { type: String } ,
    email: { type: String, required:true, unique: true } ,
    password:  {  type: String, required:true, unique: true  } ,
    country: { type: String }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User