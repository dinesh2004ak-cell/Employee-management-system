import { useLocation, useNavigate } from "react-router-dom"

function ViewEmployee() {

    const location = useLocation()
    const navigate = useNavigate()
    const emp = location.state

    return (
        <div style={{
            padding: "30px",
            background: "#f5f6fa",
            minHeight: "100vh"
        }}>

            <h2 style={{ marginBottom: "30px" }}>
                <i className="bi bi-arrow-left"
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => navigate(-1)}
                ></i>

                View Employee Details
            </h2>


            <div style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                maxWidth: "900px"
            }}>

                <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${emp.image}`}
                    style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "10px",
                        marginBottom: "25px"
                    }}
                />

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    rowGap: "25px",
                    columnGap: "60px"
                }}>

                    <div style={{
                        borderBottom: "1px solid #eee",
                        paddingBottom: "15px"
                    }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Name</p>
                        <p>{emp.name}</p>
                    </div>

                    <div
                        style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Employee ID</p>
                        <p>{emp.emp_id}</p>
                    </div>

                    <div
                        style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Department</p>
                        <p>{emp.department}</p>
                    </div>

                    <div style={{
                        borderBottom: "1px solid #eee",
                        paddingBottom: "15px"
                    }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Designation</p>
                        <p>{emp.designation}</p>
                    </div>

                    <div
                        style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Project</p>
                        <p>{emp.project}</p>
                    </div>

                    <div
                        style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Type</p>
                        <p>{emp.type}</p>
                    </div>

                    <div
                        style={{
                            borderBottom: "1px solid #eee",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "#888", marginBottom: "5px" }}>Status</p>
                        <p>{emp.status}</p>
                    </div>

                </div>

            </div>
        </div>

    )

}

export default ViewEmployee