
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    //_id asignada automaticamente x mongoose
    name: { type: String, required:true },
    img: { type: String, required:true } ,
    country: { type: String, required:true } ,
    itineraries: [ { type: mongoose.Types.ObjectId, ref: "Itinerary", required: true } ]

}, {
    timestamps: true
})

const City = mongoose.model('City', citySchema)

export default City