const Poll = require('pg').Pool

const connection = new Poll({
    user: 'postgres',
    password: 'XXXXXXX',
    host: 'localhost',
    port: 5432,
    database: 'ecoleta'
})

module.exports = connection