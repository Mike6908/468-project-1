const express = require('express');
const router = express.Router();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Location = require('./mongo-locations')
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to MongoDB
var uri = "mongodb+srv://mjlong2:mongodb1@cse486project1-bhqtk.mongodb.net/test?retryWrites=true";
mongoose.connect(uri);


//API Key for Google API
var key = "AIzaSyAqv4Ul5lVkdorWQHimhQSoZQFJILHDEIA"

app.get('/api/locations', (req,res) =>{
    //const id = req.params.id
    Location.find()
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
          res.status(200).json(doc)  
        } 
        else{
            res.status(404).json({message: "No entry with that ID found :("})
        }
        
    })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:err})
        })
    
    //res.send("Handling GET Requests to Locations ");
});

app.post('/api/locations', (req,res)=>{

    const location = new Location({
        _id: new mongoose.Types.ObjectId(),
        city: req.body.city,
        state: req.body.state
    });
    location.save()
    .then(result => {
        console.log(result)
        res.status(201).json({
        message: "Handling POST requests to /api/locations",
        createdLocale: location
    })
    })
    .catch(err => {console.log(err)
    res.json(500).json({error:err})
});
    
    
});
const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
