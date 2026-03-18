const db = require("../db")

exports.getEmployees = (callback) => {
    db.query("SELECT * FROM employees", callback)
}

exports.addEmployee = (data, callback) => {
    const sql = `
    INSERT INTO employees
    (name,emp_id,department,designation,project,type,status,image)
    VALUES (?,?,?,?,?,?,?,?)
    `
    db.query(sql, data, callback)
}

exports.updateEmployeeWithImage = (data, callback) => {
    const sql = `
    UPDATE employees
    SET name=?,emp_id=?,department=?,designation=?,project=?,type=?,status=?,image=?
    WHERE id=?
    `
    db.query(sql, data, callback)
}

exports.updateEmployeeWithoutImage = (data, callback) => {
    const sql = `
    UPDATE employees
    SET name=?,emp_id=?,department=?,designation=?,project=?,type=?,status=?
    WHERE id=?
    `
    db.query(sql, data, callback)
}

exports.deleteEmployee = (id, callback) => {
    db.query("DELETE FROM employees WHERE id=?", [id], callback)
}