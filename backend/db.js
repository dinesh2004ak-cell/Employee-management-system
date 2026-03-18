
const mysql = require("mysql2")
const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "DinesH@2004.",
     database: "employee_db"
})
db.connect((err) => {
     if (err) { console.log("DB connection error") }
     else { console.log("MySQL Connected") }
})
module.exports = db