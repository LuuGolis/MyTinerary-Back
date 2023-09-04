import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";

const itinerariesRouter = Router()

itinerariesRouter.get('/', itineraryController.getAllItineraries)
itinerariesRouter.get('/:id', itineraryController.getItinerary)
itinerariesRouter.get('/:name', itineraryController.getItineraryByCity)
itinerariesRouter.post('/', itineraryController.createItinerary)
itinerariesRouter.put('/:id', itineraryController.updateItinerary)
itinerariesRouter.delete('/:id', itineraryController.deleteItinerary)

export default itinerariesRouter