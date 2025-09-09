## Idea Management API  

This project is a **Node.js RESTful API** that allows users to manage their ideas with authentication and secure access.  
It provides functionality for **user registration, login, and idea management** with advanced database querying.  

## Features  

### 🔐 User Authentication  
- Register new users with hashed passwords.  
- Login with username and password to get a JWT token.  
- Middleware to protect routes using JWT authentication.  

### 💡 Idea Management (CRUD)  
- Create, Read, Update, and Delete ideas.  
- Each idea can be linked to a specific user.  
- Protected routes → only authenticated users can manage their ideas.  

### 📊 Advanced Querying  
- **Filtering**:  
  Example → `/api/ideas?status=Concept`  

- **Sorting**:  
  Example → `/api/ideas?sort=title&order=asc`  

- **Pagination**:  
  Example → `/api/ideas?_limit=10&_page=1`  
---
## 📬 Postman Collection and API endpoint documentation

You can explore and test the API using the Postman Collection below:

👉 [Postman Collection](https://goatme.postman.co/workspace/SocialNet-API~f41737ee-6515-4f7d-8266-fe9389bba116/collection/40780206-17876d96-11d7-4011-90f0-a6b2e1afa3da?action=share&creator=40780206&active-environment=40780206-933f2555-d54b-4b2b-84d7-4af1c94aac5e)

---
## 🚀 How to Run the Project
Make sure you have **Node.js** installed on your machine.  

1. **Clone the repository**  
   ```bash
   git clone <repo-url>
   cd Project-Ideas-Manager-API
2. **Install dependencies**  
   ```bash
   npm install
3. **create .env**
   ```bash
   SECRET_KEY=your_secret_ket
   
4. **Start the server**  
   ```bash
   npm run dev

## 💻 Tech Stack
- **Node.js** → JavaScript runtime environment.
- **Express.js** → Backend framework for building APIs.
- **JavaScript (ES6+)** → Core language used.
- **SQLite** → Lightweight relational database.
- **JSON** → For storing user data.  
- **Git & GitHub** → For version control and collaboration.
- **bcryptjs** → For hashing and verifying passwords.  
- **jsonwebtoken** → For generating and verifying JWT tokens.  
- **dotenv** → For managing environment variables securely.  
