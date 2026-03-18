const service = require("../Services/employeeservice")

exports.getEmployees = (req, res) => {
    service.getEmployees((err, result) => {
        if (err) return res.json(err)
        res.json(result)
    })
}

exports.addEmployee = (req, res) => {
    const { name, emp_id, department, designation, project, type, status } = req.body
    const image = req.file.filename

    const data = [name, emp_id, department, designation, project, type, status, image]

    service.addEmployee(data, (err) => {
        if (err) return res.send("Error")
        res.send("Employee Added")
    })
}

exports.updateEmployee = (req, res) => {
    const { name, emp_id, department, designation, project, type, status } = req.body
    const id = req.params.id

    let image = req.file ? req.file.filename : null

    if (image) {
        const data = [name, emp_id, department, designation, project, type, status, image, id]
        service.updateEmployeeWithImage(data, (err) => {
            if (err) return res.send("Error")
            res.send("Updated with image")
        })
    } else {
        const data = [name, emp_id, department, designation, project, type, status, id]
        service.updateEmployeeWithoutImage(data, (err) => {
            if (err) return res.send("Error")
            res.send("Updated")
        })
    }
}

exports.deleteEmployee = (req, res) => {
    const id = req.params.id

    service.deleteEmployee(id, (err) => {
        if (err) return res.send("Error deleting")
        res.send("Deleted")
    })
}