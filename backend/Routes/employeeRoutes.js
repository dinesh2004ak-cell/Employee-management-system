const express = require("express")
const router = express.Router()
const controller = require("../Controllers/employeecontroller")
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

router.get("/", controller.getEmployees)
router.post("/add", upload.single("image"), controller.addEmployee)
router.put("/update/:id", upload.single("image"), controller.updateEmployee)
router.delete("/delete/:id", controller.deleteEmployee)

module.exports = router