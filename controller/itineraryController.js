import Itinerary from "../Models/Itinerary.js";
import City from "../Models/City.js";

export const getAllItineraries = async (request, response) => {
        
         try {
            const itineraries = await Itinerary.find().populate('city')
            response.status(200).json( { itineraries: itineraries})
        } catch (err) {
            response.status(500).json(err)
        }
    }

    //

   export const  getItinerary = async (req, response) =>{
        try{
           const  itineraries = await Itinerary.findById( req.params.id).populate('city')
             response.status(200).json( { status:200, success:true, response: itineraries})
            } catch (err) {
                response.status(500).json(err)
    }
   }
    export const  getItineraryByCity = async (req, response) =>{
        try{
            const itineraries = await Itinerary.find({city: req.params.id}).populate('city')
             response.status(200).json( { status:200, success:true, response: itineraries})
            } catch (err) {
                response.status(500).json(err)
    }

}
export const createItinerary = async (request, response) => {

    try {
        const newItinerary = { ...request.body}

        const city = await City.findOne({ city: request.body.city })


         if (city){
            newItinerary.city = city._id
         }/* else{
            const newCity = await City.create({city: request.body.city})
            newItinerary.city = newCity._id
         } */
         const itinerary = await Itinerary.create(newItinerary)
         await City.findOneAndUpdate({ _id: newItinerary.city}, {$push:{itineraries: itinerary._id}})
         response.status(201).json({newItinerary: itinerary})
        
    } catch (err) {
        response.status(500).json({message: err})
    }
   

}
     /* 
    export const createItineries = async(req, response) =>{
        try {
            for (const item of req.body){
                const { city } = item
                const newItinerary = {...item}
                const aux = await City.findOne({ city: city })

                if(aux){
                    newItinerary.city = aux._id
                }else {
                    const newCity = await City.create({ city: city})
                    newItinerary.city = newCity._id
                }
                const itinerary = await Itinerary.create(newItinerary)
                await City.findOneAndUpdate({ city:city }, { $push: { itineraries: itinerary._id}})
            }
            response.status(200).json({succes:true})
        }
        catch(err){
            response.status(500).json({message:err})
        }
    } */
    export const updateItinerary = async (request, response) => {
        const { id } = request.params
        let error = null
        let success = true
        console.log(request.body);
        
        try {
          let  itinerary = await Itinerary.findOneAndUpdate( {_id: id}, request.body, { new:true })
            response.json({
                response: itinerary,
                success,
                error
            })
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
       

    }
    export const deleteItinerary = async (request, response) => {
        const { id } = request.params
        let error = null
        let success = true
        console.log(request.body);
        
        try {
            let itinerary = await Itinerary.findOneAndDelete( {_id: id})
            response.json({
                response: itinerary,
                success
            })
        } catch (err) {
            success = false;
            error = err;
        }


    }
