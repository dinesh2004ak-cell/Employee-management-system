const express = require("express")
const router = express.Router()
const db = require("../db")
const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


router.post("/add", upload.single("image"), (req, res) => {

    const { name, emp_id, department, designation, project, type, status } = req.body
    const image = req.file.filename

    const sql = `
INSERT INTO employees
(name,emp_id,department,designation,project,type,status,image)
VALUES (?,?,?,?,?,?,?,?)
`

    db.query(sql, [name, emp_id, department, designation, project, type, status, image],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error")
            } else {
                res.send("Employee Added")
            }
        })

})

router.put("/update/:id", upload.single("image"), (req, res) => {

    const { name, emp_id, department, designation, project, type, status } = req.body
    const id = req.params.id

    let image = null
    if (req.file) {
        image = req.file.filename
    }

    let sql
    let values

    if (image) {
        sql = `
UPDATE employees
SET name=?,emp_id=?,department=?,designation=?,project=?,type=?,status=?,image=?
WHERE id=?
`
        values = [name, emp_id, department, designation, project, type, status, image, id]

    } else {

        sql = `
UPDATE employees
SET name=?,emp_id=?,department=?,designation=?,project=?,type=?,status=?
WHERE id=?
`
        values = [name, emp_id, department, designation, project, type, status, id]

    }

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err)
            res.send("Error")
        } else {
            res.send("Employee Updated")
        }
    })

})

router.delete("/delete/:id", (req, res) => {

    const id = req.params.id

    const sql = "DELETE FROM employees WHERE id=?"

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
            res.send("Error deleting employee")
        } else {
            res.send("Employee deleted successfully")
        }
    })

})


module.exports = router

