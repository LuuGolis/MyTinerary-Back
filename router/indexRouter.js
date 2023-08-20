import { Router, request, response } from "express";
import citiesRouter from "./citiesRouter.js";

const indexRouter = Router()

indexRouter.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server en /api :)')
})

indexRouter.use('/cities', citiesRouter)

export default indexRouter