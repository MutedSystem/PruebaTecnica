/// importacion de dependencias
const mysql = require('mysql')

/// conexion y exportacion de la base de datos
export const createConnection = function ()  {
    return mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        multipleStatements: true
    })
}