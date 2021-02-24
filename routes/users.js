const express = require("express");
const {fetchAllUsers, fetchUser, addUser} = require('../services/userServices')
const router = express.Router();

//get all users
router.get("/users",fetchAllUsers)

//get a specific user
router.get("/user/:id",fetchUser)

//create a user
router.post("/user", addUser)

//update a user

//delete a user

module.exports =router