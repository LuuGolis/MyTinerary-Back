import { Router } from "express";
import {getAllCities, getOneCity, createOneCity, updateOneCity, deleteOneCity} from "../controller/citiesController.js";

const citiesRouter = Router()

citiesRouter.get('/', getAllCities)
citiesRouter.get('/:id', getOneCity)
citiesRouter.post('/', createOneCity)
citiesRouter.put('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

export default citiesRouter