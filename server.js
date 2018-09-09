const express = require('express');
const mongoose = require('mongoose');

//var uri = "mongodb+srv://mjlong2@buffalo.edu:@mongodb1@cse486project1-bhqtk.mongodb.net/test?retryWrites=true";
//mongoose.connect(uri,{ useNewUrlParser: true });

const app = express();
app.get('/api/locations', (req,res) =>{
const locations = [
    {id: 1, city:'Buffalo', state: 'NY' }
]
res.json(locations);
});

const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
