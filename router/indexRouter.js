import { Router } from "express";

const indexRouter = Router()

indexRouter.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server en /api :)')
})

indexRouter.get('/home', (request, response, next) =>{
    response.send('Bienvenido a mi server en /home :)')
})

export default indexRouter