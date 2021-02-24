require('dotenv').config();
const express= require("express");
const userRoute =require("./src/routes/users")
const app = express();
const PORT= process.env.PORT

app.use(express.json())// => req.body
app.use("/api/user", userRoute)

app.listen(PORT, ()=>{
    console.log(`app is listening to port ${PORT}`)
})