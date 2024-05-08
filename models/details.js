const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    colour : {
        type:String,
        required : true,
    },

    speed : {
        type:String,
        required : true,
    },
    AirBag : {
        type:String,
        required : true,
    },
    FuelType : {
        type:String,
        required : true,
    },
    Bluetooth : {
        type:String,
        required : true,
    },
    AutoPilot : {
        type:String,
        required : true,
    },
    RemoteStart:{
        type:String,
        required : true,
    },
    model:{
        type:String,
        required : true,
    },
    engine_Type:{
        type:String,
        required : true,
    },
    total_seats:{
        type:String,
        required : true,
    }
})

const newr = mongoose.model('features',NewSchema);
module.exports= newr