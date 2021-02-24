const pool = require('../data/db')


const getAllUsers=async()=>{
    try{ 
        const result= await pool.query('SELECT * FROM usertbl')
        return  result.rows
    }
    catch(err){
        return err
    }
}

const getUser= async (userId)=>{
    try{
        const result= await pool.query(`SELECT * FROM usertbl WHERE user_Id=($1)`,[userId])
        return  result.rows
    }
    catch(err){
        return err
    }
}

const createUser =async(userName)=>{
    try{
        const newUser = await pool.query('INSERT INTO usertbl (userName) VALUES ($1) RETURNING *', [userName])
        return newUser.rows
    }
    catch(err){
        return err
    }
}



module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUser = getUser;


