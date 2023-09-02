import Itinerary from "../Models/Itinerary.js";

const itineraryController = {
    getAllItineraries: async (request, response) => {
        let error = null
        let success = true
         try {
            const itineraries = await Itinerary.find()
        
            response.json({
                response: itineraries,
                success,
                error
            })

        } catch (err) {
            console.log(err);
            success = false;
            error = err;
           
         }
    },

    getItinerary: async (request, response) =>{
        let error = null
        let success = true

        try{
            const itineraries = await Itinerary.findById( req.params.id)
      
    } catch (err) {
        console.log(err);
        success = false;
        error = err;
       
     }
     response.json({
        response: itineraries,
        succes,
        error
    })
    },

    getItineraryByCity: async(request,response)=> {
        console.log(request.params);
        const { _name } = request.params
        let error = null
        let success = true;

        try {
          const  itineraries = await Itinerary.findOne({ name: _name })
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
        response.json({
            response: itineraries,
            success,
            error
        })
    },
    createItinerary: async (request, response) => {
        console.log(request.body);
        let itineraries
        let error = null
        let success = true;
        try {
        
             itineraries = await Itinerary.create(request.body)
            
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
        response.json({
            response: itineraries,
            success,
            error
        })

    },
    updateItinerary: async (request, response) => {
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
       

    },
    deleteItinerary: async (request, response) => {
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

}

export default itineraryController