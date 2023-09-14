import joi from "joi"

export const signUpValidator = (req, res,next) =>{
const schema =  joi.object({
    name: joi.string().min(3).max(20).required().messages({
        'string.name': "Field should be a text", 
        'string.empty': "Field is required",
        'string.min':"Name too short",
        'sitring.max':"Name too long"
        
    }),
    lastName: joi.string().min(3).max(20).required().messages({
        'string.name': "Field should be a text", 
        'string.empty': "Field is required",
        'string.min':"last name too short",
        'sitring.max':" last name too long"
        
    }),
    email: joi.string().min(5).max(30).required().messages({
        'string.name': "Field should be a text", 
        'string.empty': "Field is required",
        'string.min':"mail too short",
        'sitring.max':"mail too long"
        
    }),
    password: joi.string().min(8).max(20).pattern(new RegExp('^[a-zA-Z0-9][3,30]$')).required().messages({
        'string.name': "Field should be a text", 
        'string.empty': "Field is required",
        'string.min':"password too short",
        'sitring.max':"password too long"
        
    }),
    country: joi.string().min(3).max(20).messages({
        'string.name': "Field should be a text", 
        'string.min':"country name too short",
        'sitring.max':"country name too long"
        
    }),
    img: joi.string().uri()

})

const validate = schema.validate(req.body, {abortEarly:false})

if (validate.error){
    return res.json({success:false, errors:validate.error.details})
}
next()
}