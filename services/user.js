const pool = require('../data/db')


const getAllUsers=async()=>{
    try{ 
        const result =pool.query('SELECT * FROM usertbl').rows
        console.log('res', result)
        return await result
    }
    catch(err){
        return err
    }
}


module.exports.getAllUsers = getAllUsers;


