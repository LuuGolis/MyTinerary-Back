import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const citiesRouter = Router()

citiesRouter.get('/', citiesController.getAllCities)
citiesRouter.get('/:id', citiesController.getOneCity)
citiesRouter.post('/', citiesController.createOneCity)
citiesRouter.put('/:id', citiesController.updateOneCity)
citiesRouter.delete('/:id', citiesController.deleteOneCity)

export default citiesRouter