console.log("hello"); //test

//import express from 'express'  -- wont work
//require() is a Node.js function used to import modules (like Python’s import)'mongoose' tells it to load the Mongoose package from your node_modules

const express = require('express')
const mongoose = require('mongoose')
const StudModel = require('./models/student.js')

const app = express();

//configure middleware to pass JSON as nodejs cannot parse json by default
app.use(express.json())

//to handle form request

app.use(express.urlencoded({extended:false}));

// route that the server should listen to for requests. This URL represents a specific path on your server where clients (like web browsers or other applications) can send HTTP requests (such as POST, GET, PUT, DELETE, etc.)


// req.body is an object that contains data sent by the client (like a web browser or another server) in the body of an HTTP request. It is commonly used in POST and PUT requests where the client sends data to the server, such as form data or JSON objects.

app.post('/api/students',async (req,res)=>{
    try{
      const student = await StudModel.create(req.body);
      res.status(200).json(student);
    }catch(error){
       res.status(500).json({message:error.message})
    }

})

 //retrive all

 app.get('/api/students',async (req,res)=>{

    try {
        const student = await StudModel.find({});
        res.status(200).json(student);
        
    } catch (error) {
        
        res.status(500).json({message:error.message});
    }

});

//retreive by id

app.get('/api/students/:id',async (req,res)=>{

    try {
        const { id } = req.params;
       const student = await StudModel.findById(id);
       res.status(200).json(student);
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

});

//update by id

app.put('/api/students/:id',async(req,res)=>{
    try{
        const {id} = req.params;

        const student = await StudModel.findByIdAndUpdate(id,req.body);
     //if object dont exist
     if(!student){
        return res.status(404).json({message:"Student not found"})
     }
    
     const updatedStud = await StudModel.findById(id);
    
     return res.status(200).json(updatedStud);
    }
    catch(error){
        res.status(500).json({message:error.message});
    } 
})

//delete by id
app.delete('/api/students/:id',async (req,res)=>{
try {
    const { id } =req.params;

    const student = await StudModel.findByIdAndDelete(id);

    if(!student){
        return res.status(500).json({message:"Student not found"})
    }

    res.status(200).json({message:"Student deleted successfully"});
} catch (error) {
    res.status(404).json({message: error.message});
}
   

})
//connection string
mongoose.connect("mongodb://127.0.0.1:27017/students").then(()=>{
    console.log("connection successful");
    app.listen(3000,()=>{
        console.log("server listening on port 3000");
        
    })
}).catch(()=>{
    console.log("something went Wrong");
    
})
