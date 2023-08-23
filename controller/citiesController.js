import { request, response } from "express";
import cities from "../cities.js";
import City from "../Models/City.js"

const citiesController = {
    getAllCities: async (request, response, next) => {
        /*  const allCities = await City.find({
              name:
          })*/
        let cities;
        let error = null
        let success = true;
        try {
            cities = await City.find()

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
    getOneCity: async (request, response, next) => {
        console.log(request.params);
        const { _name } = request.params
        let cities;
        let error = null
        let success = true;

        try {
            cities = await City.findOne({ name: _name })
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
            /* const newCity = new City(request.body)
             
             await newCity.save()
             console.log(newCity);*/
            city = await City.create(request.body)
            console.log(city);
            //await City.create(request.body)
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

    }


}




export default citiesController