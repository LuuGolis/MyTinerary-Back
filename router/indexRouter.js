import { Router, request, response } from "express";
import citiesRouter from "./citiesRouter.js";

const indexRouter = Router()

indexRouter.use('/cities', citiesRouter)
/*
indexRouter.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server en /api :)')
})*/

export default indexRouter