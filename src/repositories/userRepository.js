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
        return newUser.rowCount
    }
    catch(err){
        return err
    }
}

const updateUser= async(userId, userName)=>{
    try{
        const updatedUser = await pool.query("UPDATE usertbl SET userName = $1 WHERE user_Id= $2",[userName, userId])
        return updatedUser.rowCount
    }
    catch(err){
        return err
    }
}


module.exports= {
    getAllUsers,
    getUser,
    createUser,
    updateUser
}


