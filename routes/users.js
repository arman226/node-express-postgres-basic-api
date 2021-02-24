const express = require("express");
const userService= require('../services/userService')
const router = express.Router();

//get all users
router.get("/users", async(req, res)=>{
    try{
        const all=  await userService.getAllUsers()
        res.status(200).json( all)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})

//get a specific user
router.get("/user/:id", async(req, res)=>{
   try{ const {id} = req.params
    const selectedUser= await userService.getUser(id);
    res.status(200).json(selectedUser)
   }
   catch(err){
    res.status(500).json(err.message)
   }
})


//create a user
router.post("/user", async(req, res)=>{
    try{
        const {userName} = req.body
        const newUser = await userService.createUser(userName)
        res.json(newUser)
    }
    catch(err){
        res.json(err.message);
    }
})

//update a user

//delete a user

module.exports =router