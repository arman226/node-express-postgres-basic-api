
const express= require("express");
const userRoute =require("./routes/users")
const app = express();
const PORT= 3000
app.use(express.json())// => req.body

app.use("/api/user", userRoute)

app.listen(PORT, ()=>{
    console.log(`app is listening to port ${PORT}`)
})