#  Employee Management System

## Project Overview
This is a Full Stack Employee Management System built using React, Node.js, Express, and MySQL.  
It allows users to manage employee records with CRUD operations and image upload functionality.

---

##  Features
-  Add Employee
-  View Employees List
-  View Employee Details
-  Update Employee
-  Delete Employee
-  Upload Profile Image

---

##  Tech Stack

### Frontend
- React.js
- Axios
- Bootstrap Icons

### Backend
- Node.js
- Express.js
- Multer

### Database
- MySQL

---

## Project Structure

```
backend/
├── controllers/
├── services/
├── Routes/
├── uploads/
├── db.js
└── server.js

src/
├── Pages/
├── components/
├── App.jsx
└── main.jsx
```

---

##  Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/dinesh2004ak-cell/Employee-management-system.git
cd Employee-management-system
```

---

##  Backend Setup
```bash
cd backend
npm install
npx nodemon server.js
```

---

##  Frontend Setup
```bash
npm install
npm run dev
```
---

## Database Setup

###  Step 1: Create Database
```sql
CREATE DATABASE employee_db;
```

---

###  Step 2: Use Database
```sql
USE employee_db;
```

---

###  Step 3: Create Table
```sql
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
## Notes
- `node_modules` is ignored using `.gitignore`
- Uploaded images are not stored in GitHub
- Images are saved locally in the `uploads` folder
 

