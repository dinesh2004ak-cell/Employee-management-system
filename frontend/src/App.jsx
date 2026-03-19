import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Employees from "./Pages/Employees";
import AddEmployee from "./Pages/AddEmployee";
import ViewEmployee from "./Pages/ViewEmployee"
function App() {
    return (<BrowserRouter>
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navbar />
                <Routes> <Route path="/" element={<Employees />} />
                    <Route path="/add" element={<AddEmployee />} />
                    <Route path="/view" element={<ViewEmployee />} />
                </Routes> </div> </div> </BrowserRouter>)
}
export default App;