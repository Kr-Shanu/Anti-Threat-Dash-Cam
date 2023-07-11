const Pool = require('pg').Pool

const pool = new Pool({
    user: 'kumarshanu',
    host: 'localhost',
    database: 'Threat Model',
    // password: 'password',
    port: 5432
})

module.exports = pool;