import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    name: editData?.name || "",
    emp_id: editData?.emp_id || "",
    department: editData?.department || "",
    designation: editData?.designation || "",
    project: editData?.project || "",
    type: editData?.type || "",
    status: editData?.status || ""
  });

  const inputStyle = {
    width: "100%",
    height: "42px",
    padding: "0 20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginTop: "6px",
    boxSizing: "border-box"
  };

  const rowStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "20px"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("emp_id", form.emp_id);
    formData.append("department", form.department);
    formData.append("designation", form.designation);
    formData.append("project", form.project);
    formData.append("type", form.type);
    formData.append("status", form.status);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    if (editData) {
      axios
        .put(`http://localhost:5000/employees/update/${editData.id}`, formData)
        .then(() => navigate("/"));
    } else {
      axios
        .post("http://localhost:5000/employees/add", formData)
        .then(() => navigate("/"));
    }
  };

  return (
    <div style={{ padding: "30px", background: "#f5f6fa", minHeight: "100vh" }}>

      
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <i
          className="bi bi-arrow-left"
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <h2 style={{ margin: 0 }}>
          {editData ? "Edit Employee Profile" : "Add New Employee"}
        </h2>
      </div>

      
      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <span style={{ color: "#0d6efd", fontWeight: "600" }}>
          <i className="bi bi-person-fill"></i> Personal Information
        </span>
        <div style={{ height: "2px", background: "#0d6efd", marginTop: "5px", width: "15%" }} />
      </div>

      
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", border: "1px solid #ddd" }}>
        <form onSubmit={handleSubmit}>

          
          <div style={{
            width: "110px",
            height: "110px",
            border: "1px dashed #ccc",
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8f9fa",
            marginBottom: "20px"
          }}>
            {image ? (
              <img src={image} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : editData?.image ? (
              <img src={`http://localhost:5000/uploads/${editData.image}`} alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <i className="bi bi-camera" style={{ fontSize: "26px", color: "#888" }}></i>
            )}

            <label style={{
              position: "absolute",
              bottom: "5px",
              right: "5px",
              background: "#0d6efd",
              color: "#fff",
              borderRadius: "50%",
              padding: "6px",
              cursor: "pointer"
            }}>
              <i className="bi bi-pencil"></i>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(URL.createObjectURL(file));
                  setImageFile(file);
                }}
              />
            </label>
          </div>

          
          <div style={rowStyle}>
            <div style={{ flex: 1 }}>
              <label>Name*</label>
              <input type="text" placeholder="Enter name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label>Employee ID*</label>
              <input type="text" placeholder="Enter ID"
                value={form.emp_id}
                onChange={(e) => setForm({ ...form, emp_id: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>

          
          <div style={rowStyle}>
            <div style={{ flex: 1 }}>
              <label>Department*</label>
              <select value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                style={inputStyle}>
                <option>Select Department</option>
                <option>Design</option>
                <option>Development</option>
                <option>HR</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label>Designation*</label>
              <input type="text" placeholder="Enter designation"
                value={form.designation}
                onChange={(e) => setForm({ ...form, designation: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>

        
          <div style={rowStyle}>
            <div style={{ flex: 1 }}>
              <label>Project*</label>
              <input type="text" placeholder="Enter project"
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label>Type*</label>
              <select value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                style={inputStyle}>
                <option value="">Select Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Intern</option>
                <option>Contract</option>
              </select>
            </div>
          </div>

          
          <div style={{ marginBottom: "20px", width: "49%" }}>
            <label>Status*</label>
            <select value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              style={inputStyle}>
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button
              type="button"
              onClick={() => {
                setForm({
                  name: "",
                  emp_id: "",
                  department: "",
                  designation: "",
                  project: "",
                  type: "",
                  status: ""
                });
                setImage(null);
              }}
              style={{ background: "#e9ecef", border: "none", padding: "10px 20px", borderRadius: "6px" }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{ background: "#0d6efd", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px" }}
            >
              {editData ? "Update" : "Confirm"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddEmployee;