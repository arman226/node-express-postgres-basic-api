const {getAllUsers,getUser} = require('../repositories/userRepository')
 
const fetchAllUsers=async(req, res)=>{
    try{
        const all=  await getAllUsers()
        res.status(200).json( all)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}


const fetchUser = async(req, res)=>{
    try{ const {id} = req.params
     const selectedUser= await getUser(id);
     res.status(200).json(selectedUser)
    }
    catch(err){
     res.status(500).json(err.message)
    }
 }

 const addUser=async(req, res)=>{
    try{
        const {userName} = req.body
        const newUser = await userRepository.createUser(userName)
        res.json(newUser)
    }
    catch(err){
        res.json(err.message);
    }
}

module.exports={
    fetchAllUsers,
    fetchUser,
    addUser
}