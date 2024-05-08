const express =  require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
var bodyParser = require("body-parser");




const { connectMongoDB } = require("./connection");
const mongoURI = "mongodb://localhost:27017/Car_data";
connectMongoDB(mongoURI);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


const homeRoutes = require("./router/detail");
app.use("/", homeRoutes);

//mongodb://localhost:27017/

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

