
import City from "../Models/City.js"


   export const getAllCities= async (request, response) => {
        const query = {}

        if(request.query.name){
            query.name = { $regex: request.query.name, $options: 'i'}
        }
        
        try {
          const  cities = await City.find( query ).populate({path: 'itineraries'})
          response.status(200).json({status:200, success:true, response: cities})

        } catch (err) {
response.status(500).json({message:err})
        }
    }
    export const getOneCity = async (request, response) => {
        

        try {
          const  cities = await City.findById( request.params.id ).populate({path:'itineraries'})
          response.status(200).json( { cities: cities})
        } catch (err) {
            response.status(500).json(err)
        }
    }
    export const createOneCity = async (request, response) => {
        try {
        
           const cities = await City.create(request.body)
           res.status(201).json( { cities: cities } )
        } catch (error) {
            res.status(500).json( error )
        }
        response.json({
            response: cities,
            success,
            error
        })

    }
    export const updateOneCity = async (request, response, next) => {
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
       

    }
    export const deleteOneCity= async (request, response, next) => {
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

