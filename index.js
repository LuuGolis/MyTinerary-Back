import 'dotenv/config.js'
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from 'cors'
import './config/database.js'

const server = express()

server.use('/api', indexRouter)

server.get('/', (request, response, next) =>{
    response.send('Bienvenido a mi server / :)')
})

server.listen(process.env['PORT'], () => {console.log('servidor corriendo')})

