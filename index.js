
const express= require("express");
const pool= require("./data/db")
const app = express();
const port= 3000
const us= require('./services/user')



app.use(express.json())// => req.body


//ROUTES//

//get all users
app.get("/users", async(req, res)=>{
    try{
        const allUsers = await pool.query('SELECT * FROM usertbl')
        res.json(allUsers)
        console.log('test'+allUsers)

    }
    catch(err){
        res.json(err.message)
    }
})

//get a specific user

//create a user

app.post("/user", async(req, res)=>{
    try{
        const {userName} = req.body
        const newUser = await pool.query('INSERT INTO usertbl (userName) VALUES ($1) RETURNING *', [userName])
        res.json(newUser)
    }
    catch(err){
        res.json(err.message);
    }
})

//update a user

//delete a user



app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`)
})