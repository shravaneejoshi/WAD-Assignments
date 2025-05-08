//console.log("Hello World");
//import express from 'express'  -- wont work
//require() is a Node.js function used to import modules (like Python’s import)'mongoose' tells it to load the Mongoose package from your node_modules

const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./models/user.model.js')
const app = express()

//configure middleware to pass JSON as nodejs cannot parse json by default
app.use(express.json())

//This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.


// app.get('/',(req,res)=>{
//     res.send("Response from Node API Server updated");
    
//     }); 

    // app.post('/api/user',(req,res)=>{
    //     console.log(req.body);
    //     res.send(req.body)
    // })


    //save in mongodb

    app.post('/api/users',async (req,res)=>{
        try{
          const user = await userModel.create(req.body);
          res.status(200).json(user);
        }catch(error){
           res.status(500).json({message:error.message})
        }

    })


    //retrive all

    app.get('/api/users',async (req,res)=>{

        try {
            const users = await userModel.find({});
            res.status(200).json(users);
            
        } catch (error) {
            
            res.status(500).json({message:error.message});
        }

    });

    //retreive by id

    app.get('/api/users/:id',async (req,res)=>{

        try {
            const { id } = req.params;
           const user = await userModel.findById(id);
           res.status(200).json(user);
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }

    })

//connection string

mongoose.connect("mongodb://127.0.0.1:27017/Users") .then(()=>{
    console.log("Connected to DB");
    app.listen(3000,()=>{
        console.log("server is listening on port 3000")
    });   
}) 
.catch(()=>{
    console.log("Connection Failed");
    
})
