import { Router } from "express";

const indexRouter = Router()

indexRouter.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server en /api :)')
})

export default indexRouter