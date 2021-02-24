// this allows us to set a configuration for what or where we want  to connect our database
require('dotenv').config();
const Pool = require("pg").Pool;

const pool= new Pool({
    'user':'armandobibayjr',
     'password': '',
     'database': process.env.DATABASE,
     'host': process.env.DATABASE_HOST,
     'port': process.env.DATABASE_PORT
});

module.exports = pool;