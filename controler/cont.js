const path = require('path')
const detail = require('../models/details');
const { features } = require('process');
const { defaultMaxListeners } = require('events');

module.exports ={

  home : async(req, res) => {
    res.render("home");   
   },

    Car_Features: async (req, res) => {
        const { colour,speed,AirBag,FuelType,Bluetooth,AutoPilot,RemoteStart,model,engine_Type, total_seats } = req.body;
        console.log(colour,speed,AirBag,FuelType,Bluetooth,AutoPilot,RemoteStart,model,engine_Type, total_seats  );
      //,AirBag,FuelType,Bluetooth,AutoPilot,RemoteStart,model,engine_Type, total_seats 
        const newPerson = new detail({ colour,speed,AirBag,FuelType,Bluetooth,AutoPilot,RemoteStart,model,engine_Type, total_seats });
        try {
          await newPerson.save();
          res.render("add"); 
        } catch (err) {
          console.error(err);
          res.status(500).send("Server error");
        }
      },

      querry1: async (req, res) => {
        const obj = req.body;
        console.log(obj);
        try {
            const result = await detail.insertOne(obj);
            // Assuming you want to send some response back after insertion
            return res.send("Document inserted successfully");
        } catch (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }
    },
    
  querry2: async (req, res) => {
    try {
        const result = await detail.deleteOne();
        console.log(result);

        if (result.deletedCount === 0) {
            return res.send("No such file");
        }
        return res.send("Document deleted successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
},
querry3 : async (req, res) => {

  const obj = {};
  if (req.query.FuelType) {
      obj.FuelType = req.query.FuelType;
  }
  if (req.query.colour) {
    obj.colour = req.query.colour;
}
if (req.query.speed ) {
  obj.speed  = req.query.speed ;
}

if (req.query. AirBag  ) {
  obj. AirBag   = req.query. AirBag ;
}

if (req.query.Bluetooth  ) {
  obj.Bluetooth   = req.query.  Bluetooth ;
}
if (req.query.AutoPilot  ) {
  obj.AutoPilot   = req.query.AutoPilot ;
}

if (req.query.RemoteStart  ) {
  obj.RemoteStart   = req.query.RemoteStart ;
}



 

  const result = await detail.find(obj)
 console.log(result)
 res.send(result);
},

querry4: async (req, res) => {

  try {
      const result = await detail.find();
      return res.send(result);
  } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
  }
},
};