import { Router, request, response } from "express";
import citiesRouter from "./citiesRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";

const indexRouter = Router()

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)
/*
indexRouter.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server en /api :)')
})*/

indexRouter.get('/home', (request, response, next) =>{
    response.send('Bienvenido a mi server en /home :)')
})

export default indexRouter