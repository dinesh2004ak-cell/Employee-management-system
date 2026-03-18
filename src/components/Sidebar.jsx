function Sidebar() {

    return (

        <div style={{
            width: "220px",
            background: "#fff",
            borderRight: "1px solid #eee",
            height: "100vh"
        }}>

            <h3 style={{ padding: "20px", color: "#0d6efd", fontSize: "27px", marginbottom: "10px" }}>RS-TECH</h3>

            <ul style={{ listStyle: "none", padding: "10px" }}>

                <li style={{ padding: "20px", color: "#6c757d" }}><i className="bi bi-grid-fill" style={{ marginRight: "6px" }}></i> Dashboard</li>

                <li style={{
                    padding: "20px",
                    background: "#0d6efd",
                    color: "#fff",
                    borderRadius: "6px 20px 20px 6px"
                }}><i className="bi bi-people-fill" style={{ marginRight: "6px" }}></i>  Employee
                </li>

                <li style={{ padding: "20px", color: "#6c757d" }}><i className="bi bi-calendar-week-fill " style={{ marginRight: "6px" }} ></i> Calendar</li>

                <li style={{ padding: "20px", color: "#6c757d" }}><i className="bi bi-chat-right-text-fill" style={{ marginRight: "6px" }}></i> Messages</li>

            </ul>

        </div>

    )

}

export default Sidebar;