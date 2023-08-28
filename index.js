import dotenv from 'dotenv'
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from 'cors'
import './config/database.js'

dotenv.config()
const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (_, response) =>{
    response.send('Bienvenido a mi server / :)')
})
server.use('/api', indexRouter)

server.listen(process.env.PORT, () => {console.log('servidor corriendo')})

