import { Router } from "express";
import { getAllItineraries, getItinerary,getItineraryByCity , createItinerary, updateItinerary, deleteItinerary} from '../controller/itineraryController.js'

const itinerariesRouter = Router()

itinerariesRouter.get('/', getAllItineraries)
itinerariesRouter.get('/:id', getItinerary)
itinerariesRouter.get('/city/:id', getItineraryByCity)
itinerariesRouter.post('/', createItinerary)
itinerariesRouter.put('/:id', updateItinerary)
itinerariesRouter.delete('/:id', deleteItinerary)

export default itinerariesRouter