import { request, response } from "express";
import City from "../Models/City.js"

const citiesController = {
    getAllCities: async (request, response) => {
        const query = {}
        let error = null
        let success = true;

        if(request.query.name){
            query.name = { $regex: request.query.name, $options: 'i'}
        }
        
        try {
          const  cities = await City.find( query )

            response.json({
                response: cities,
                success,
                error
            })

        } catch (err) {

            console.log(err);
            success = false;
            error = err;
        }
    },
    getOneCity: async (request, response) => {
        let error = null
        let success = true;
let cities
        try {
            cities = await City.findById( request.params.id )
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
        response.json({
            response: cities,
            success,
            error
        })
    },
    createOneCity: async (request, response, next) => {
        console.log(request.body);
        let cities;
        let error = null
        let success = true;
        try {
        
            cities = await City.create(request.body)
            
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
        response.json({
            response: cities,
            success,
            error
        })

    },
    updateOneCity: async (request, response, next) => {
        let city
        const { id } = request.params
        let error = null
        let success = true
        console.log(request.body);
        
        try {
            city = await City.findOneAndUpdate( {_id: id}, request.body, { new:true })
            response.json({
                response: city,
                success,
                error
            })
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
       

    },
    deleteOneCity: async (request, response, next) => {
        let city
        const { id } = request.params
        let error = null
        let success = true
        console.log(request.body);
        
        try {
            city = await City.findOneAndDelete( {_id: id})
            response.json({
                response: city,
                success
            })
        } catch (err) {
            success = false;
            error = err;
        }


    }


}




export default citiesController