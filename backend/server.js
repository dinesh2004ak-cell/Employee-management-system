require("dotenv").config()
const express = require("express")
const cors = require("cors")

const employeeRoutes = require("./Routes/employeeRoutes")
const errorHandler = require("./middleware/errorMiddleware")

const app = express()   

app.use(cors())
app.use(express.json())

app.use("/employees", employeeRoutes)
app.use("/uploads", express.static("uploads"))

app.use(errorHandler)  

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT)
})