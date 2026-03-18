const express = require("express")
const cors = require("cors")
const db = require("./db")
const employeeRoutes = require("./Routes/employeeRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/employees", employeeRoutes)

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.use("/uploads", express.static("uploads"))

app.listen(5000, () => {
    console.log("Server running on port 5000")
})