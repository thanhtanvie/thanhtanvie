const locationSchema = require('../models/location.model')

const locationController = {
    getLocations: async (req, res)=>{
        try{
            const location = await locationSchema.find()
            res.status(200).json(location);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
    createLocations: async (req, res)=>{
        try{
            const location = new locationSchema(req.body)
            const saveLocation = await location.save();
            res.status(200).json(saveLocation);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
}

module.exports = locationController;