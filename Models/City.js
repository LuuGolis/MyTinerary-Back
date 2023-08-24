import { Schema, model} from "mongoose";

const citySchema = Schema({
    //_id asignada automaticamente x mongoose
    name: { type: String, required:true },
    img: { type: String, required:true } ,
    country: { type: String, required:true } 

}, {
    timestamps: true
})

const City = model('city', citySchema)

export default City