#  Employee Management System

A full-stack Employee Management System built using React, Node.js, Express, and MySQL. This application allows users to manage employee records efficiently with CRUD operations and image upload support.

---

##  Features

*  Add Employee
*  View Employee Details
*  Update Employee
*  Delete Employee
*  Upload Employee Profile Image

---

##  Tech Stack

### Frontend

* React (Vite)
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js
* MySQL (mysql2)
* Multer (File Upload)

---

##  Project Structure

```
Employee/
├── frontend/
│   ├── src/
│   │   ├── Pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── services/
│   │   └── employeeService.js
│   ├── middleware/
│   │   ├── uploadMiddleware.js
│   │   └── errorMiddleware.js
│   ├── Routes/
│   │   └── employeeRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
```

---

##  Backend Setup

```bash
cd backend
npm install
```

### 🔐 Environment Variables (.env)

Create a `.env` file inside the backend folder:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_db
```

### ▶️ Run Backend

```bash
npx nodemon server.js
```

---

##  Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

###  Environment Variables (.env)

Create a `.env` file inside the frontend folder:

```
VITE_API_URL=http://localhost:5000
```

---

##  Database Setup

Run the following SQL queries:

```sql
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  emp_id VARCHAR(50),
  department VARCHAR(100),
  designation VARCHAR(100),
  project VARCHAR(100),
  type VARCHAR(50),
  status VARCHAR(50),
  image VARCHAR(255)
);
```

---

##  API Endpoints

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| GET    | /employees            | Get all employees |
| POST   | /employees/add        | Add new employee  |
| PUT    | /employees/update/:id | Update employee   |
| DELETE | /employees/delete/:id | Delete employee   |

---

## Concepts Used

* MVC Architecture (Controller, Service, Routes)
* REST API Development
* Middleware Usage
* File Upload with Multer
* Environment Variables Handling
* React State Management

---

## Notes

* `node_modules` is excluded using `.gitignore`
* `uploads/` folder stores employee images
* Sensitive data is managed using `.env` files
* Backend and frontend are structured separately

---



 

