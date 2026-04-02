// import dotenv from 'dotenv'
const mysql = require('mysql2/promise')
const dotenv =  require('dotenv')
dotenv.config({ path: './.env' });
console.log('Connecting to:', process.env.DB_HOST,process.env.DB_PORT,process.env.DB_USER,process.env.DB_PASSWORD,process.env.DB_NAME);
async function getConnection() {
    try{
    return await mysql.createConnection({
        host : process.env.DB_HOST,
        port : process.env.DB_PORT || 3306,
        user : process.env.DB_USER,
        password : (process.env.DB_PASSWORD || '').trim(),
        database : process.env.DB_NAME
    })
}
catch(err){
    console.error("DETAILED ERROR:", err.message);
    throw err;
}
}

/**
 * Fetch a single user record by ID (default: 1)
 * Returns: { firstname, lastname, zipcode }
 */
async function getUserTestData(id=1){
    const connection = await getConnection()
    try{
        const [rows] = await connection.execute(
            'SELECT * from user_test_data where id=?',[id]);
        if(rows.length===0)
            throw new Error(`No rows found for id: ${id}`)
        return rows[0]
    }
    finally{
        await connection.end()
    }
}

module.exports = getUserTestData