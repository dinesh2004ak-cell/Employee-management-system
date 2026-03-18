function Navbar() {
 return (

        <div style={{
            height: "60px",
            background: "#ffffff",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "30px"
        }}>

            <span style={{
                marginRight: "20px", background: "#f1f3f5",
                padding: "8px",
                borderRadius: "50%"
            }}><i className="bi bi-gear"></i></span>
            <span style={{
                marginRight: "20px", background: "#f1f3f5",
                padding: "8px",
                borderRadius: "50%"
            }}><i className="bi bi-bell"></i></span>

            <img
                src="https://i.pravatar.cc/40"
                style={{ borderRadius: "50%" }}
            />

        </div>

    )

}

export default Navbar