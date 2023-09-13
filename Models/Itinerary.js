
import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({

    userName: { type: String, required: true },
    userImg: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: mongoose.Types.ObjectId, ref: "City", required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    hashtag: { type: String, required: true },
    hashtag1: { type: String, required: true },
    hashtag2: { type: String, required: true }
    
}, {
    timestamps: true
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary