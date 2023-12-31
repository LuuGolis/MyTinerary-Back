import { Router, request, response } from "express";
import citiesController from "../controller/citiesController.js";

const citiesRouter = Router()

citiesRouter.get('/', citiesController.getAllCities)
citiesRouter.get('/:name', citiesController.getOneCity)
citiesRouter.post('/', citiesController.createOneCity)
citiesRouter.put('/:id', citiesController.updateOneCity)
citiesRouter.delete('/:id', citiesController.deleteOneCity)

export default citiesRouter