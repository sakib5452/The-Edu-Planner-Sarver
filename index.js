const express = require ('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.Port || 5000;

const coursesCollection = require("./course.json");

app.get("/", (req, res) =>{
    res.send ("Now server is running;")
});

app.get('/allCourses', (req, res) => {
 
    res.send(coursesCollection);

});

app.get("/course/:id", (req, res) =>{
    const id  = req.params.id;
    const getSingleItem = coursesCollection?.find ((p) => p.id == id);

    if(!getSingleItem){
        res.send ("khuje pai ni")
    }
    res.send (getSingleItem);
});

app.listen(Port, ()=>{
    console.log("server is running", Port);
});