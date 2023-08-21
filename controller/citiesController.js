import { request, response } from "express";
import cities from "../cities.js";
import City from "../Models/City.js"

const citiesController = {
    getAllCities:(request, response, next) => {
        response.json({
            response:cities,
            success:true,
            error: null
        })
    },
    getOneCity:(request, response, next) => {
        response.json({
            response:cities[0],
            success:true,
            error: null
        })
},
createOneCity:(request, response, next)=>{
    City.create()
    response.json({
        response:cities,
        success:true,
        error:null
    })
}
}



export default citiesController