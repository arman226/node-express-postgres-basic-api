// this allows us to set a configuration for what or where we want  to connect our database
const Pool = require("pg").Pool;

const pool= new Pool({
    'user':'armandobibayjr',
     'password': '',
     'database': 'user_database',
     'host': 'localhost',
     'port': 5432
});

module.exports = pool;