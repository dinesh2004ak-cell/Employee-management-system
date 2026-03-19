import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

function Employees() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])
  const [showDelete, setShowDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/employees`)
      .then(res => {
        setEmployees(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  const confirmDelete = () => {

    axios.delete(`${import.meta.env.VITE_API_URL}/employees/delete/${deleteId}`)
      .then(() => {

        setEmployees(employees.filter(emp => emp.id !== deleteId))
        setShowDelete(false)

      })
      .catch(err => {
        console.log(err)
      })

  }

  return (

    <div style={{
      padding: "30px",
      background: "#f5f6fa",
      minHeight: "100vh"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>

        <h1>Employee</h1>

        <div style={{ display: "flex", gap: "10px" }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #888 ",
            borderRadius: "6px",
            padding: "0 8px"
          }}>

            <i className="bi bi-search" style={{ color: "#888", marginRight: "6px" }}></i>

            <input
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                padding: "8px"
              }}
            />

          </div>

          <button style={{
            background: "#0d6efd",
            color: "#fff",
            border: "none",
            padding: "15px 25px",
            borderRadius: "9px"
          }} onClick={() => navigate("/add")}>

            <i className="bi bi-plus-circle" style={{ marginRight: "6px" }}></i>     Add New Employee

          </button>

        </div>

      </div>

      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid #ddd"
      }}>

        <table style={{
          width: "100%",
          borderCollapse: "collapse"
        }}>

          <thead>

            <tr>

              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Employee Name</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Employee ID</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Department</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Designation</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Project</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Type</th>
              <th style={{ padding: "14px", textAlign: "left", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Status</th>
              <th style={{ padding: "14px", textAlign: "center", borderBottom: "1px solid #ddd", color: "#6c757d" }}>Action</th>

            </tr>

          </thead>
          <tbody>

            {employees.length === 0 ? (

              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: "80px", fontWeight: "bold" }}>
                  No records found
                </td>
              </tr>

            ) : (

              employees.map((emp, index) => (
                <tr key={emp.id} style={{ borderBottom: "1px solid #eee" }}>

                  <td style={{ padding: "14px" }}>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      <img
                       src={`${import.meta.env.VITE_API_URL}/uploads/${emp.image}`}
                        alt={emp.name}
                        style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                      />

                      <span>{emp.name}</span>

                    </div>

                  </td>
                  <td style={{ padding: "14px" }}>{emp.emp_id}</td>
                  <td style={{ padding: "14px" }}>{emp.department}</td>
                  <td style={{ padding: "14px" }}>{emp.designation}</td>
                  <td style={{ padding: "14px" }}>{emp.project}</td>
                  <td style={{ padding: "14px" }}>{emp.type}</td>
                  <td style={{ padding: "14px" }}>{emp.status}</td>

                  <td style={{ padding: "14px", textAlign: "center" }}>
                    <i
                      className="bi bi-eye"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => navigate("/view", { state: emp })}
                    ></i>

                    <i
                      className="bi bi-pencil"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => navigate("/add", { state: emp })}
                    ></i>

                    <i className="bi bi-trash" style={{ cursor: "pointer" }} onClick={() => {
                      setDeleteId(emp.id)
                      setShowDelete(true)
                    }}></i>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
      {showDelete && (

        <div style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1000"
        }}>

          <div style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            width: "300px"
          }}>

            <i className="bi bi-trash" style={{ fontSize: "40px", color: "#0d6efd" }}></i>

            <h4 style={{ marginTop: "15px" }}>
              Are you sure you want to Delete
            </h4>

            <div style={{
              display: "flex",
              marginTop: "20px"
            }}>

              <button
                onClick={() => setShowDelete(false)}
                style={{
                  flex: "1",
                  padding: "10px",
                  background: "#ff4d4f",
                  color: "#fff",
                  border: "none"
                }}
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                style={{
                  flex: "1",
                  padding: "10px",
                  background: "#0d6efd",
                  color: "#fff",
                  border: "none"
                }}
              >
                Yes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>



  )


}

export default Employees