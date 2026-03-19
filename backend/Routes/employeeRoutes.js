const express = require("express")
const router = express.Router()

const controller = require("../controllers/employeeController")
const upload = require("../middleware/uploadMiddleware")

router.get("/", controller.getEmployees)
router.post("/add", upload.single("image"), controller.addEmployee)
router.put("/update/:id", upload.single("image"), controller.updateEmployee)
router.delete("/delete/:id", controller.deleteEmployee)

module.exports = router