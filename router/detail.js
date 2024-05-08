const express = require("express");
const router = express.Router();
const User = require('../models/details')

const user = require("../controler/cont");

router.get("/",user.home);
router.post("/add",user.Car_Features );
router.post("/",user.Car_Features);

router.post("/abc",user.querry1);
router.get("/delete",user.querry2);
router.get("/search",user.querry3);
router.get("/getAll",user.querry4);

module.exports = router;