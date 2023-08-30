import { Schema, model } from "mongoose";

const itinerarySchema = Schema({

    userName: { type: String, required: true },
    userImg: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    hashtag: { type: String, required: true },
    hashtag1: { type: String, required: true },
    hashtag2: { type: String, required: true }
    
}, {
    timestamps: true
})

const Itinerary = model('itinerary', itinerarySchema)

export default Itinerary