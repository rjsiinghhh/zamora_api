const Pool = require('pg').Pool;



const pool = new Pool({
    user: "postgres",
    password: "kth18822",
    host: "localhost",
    port: 5433,
    database: "zamora"
})


module.exports = pool;