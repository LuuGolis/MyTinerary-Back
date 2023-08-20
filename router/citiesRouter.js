import { Router, request, response } from "express";
import citiesController from "../controller/citiesController.js";

const citiesRouter = Router()

citiesRouter.get('', citiesController.getAllCities)
citiesRouter.get('/one', citiesController.getOneCity)


export default citiesRouter