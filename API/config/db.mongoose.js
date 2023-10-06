const {Client} = require('pg')

const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,
    ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
})

client.on("connect", ()=>{
  console.log("Database connected")
})

client.on("end", ()=>{
  console.log("Connection end")
})

module.exports = client