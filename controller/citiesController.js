import { request, response } from "express";
import cities from "../cities.js";
import City from "../Models/City.js"

const citiesController = {
    getAllCities:async(request, response, next) => {
      /*  const allCities = await City.find({
            name:
        })*/
        let cities
        try {
          cities = await City.find()    
        
            response.json({
                //response:City,
                success:true,
                error:null
            })
        
           } catch (error) {
            console.log(error);
        
            response.json({
                response:null,
                success:false,
                error:error
            })
        
           }
    },
    getOneCity:async(request, response, next) => {
        console.log(request.params);
        const { _name } = request.params
        let cities ;
        let error = null
        let success = true;
 
        try {
            cities = await City.find({name: _name})
        } catch (err) {
            console.log(err);
            success = false;
            error = err;
        }
        response.json({
            response:cities,
            success,
            error
        })
},
createOneCity:async (request, response, next)=>{
   console.log(request.body);

   try {
    const newCity = new City(request.body)
    
    await newCity.save()
    console.log(newCity);

    //await City.create(request.body)


    response.json({
        //response:City,
        success:true,
        error:null
    })

   } catch (error) {
    console.log(error);

    response.json({
        response:null,
        success:false,
        error:error
    })

   }
    
   
}
}



export default citiesController