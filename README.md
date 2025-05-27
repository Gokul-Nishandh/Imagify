
#  Imagify - Text to Image SaaS App

**Imagify** is a powerful **Text-to-Image SaaS application** that uses **ClipDrop AI** to generate stunning images from text prompts. It is my **first full MERN stack project**, combining powerful technologies to create a production-ready, secure, and scalable web application. Imagify allows users to convert ideas into visuals, subscribe to paid plans, and manage their image generation usage—all in one place.

---

##  Features

-  Generate AI images from text using ClipDrop API  
-  Secure login/signup using JWT Authentication  
-  Online payments through Razorpay (Test Mode)  
-  User-friendly frontend with image preview and generation history  
-  MERN stack architecture (MongoDB, Express, React, Node.js)

---

##  Tech Stack

###  Frontend
- HTML, CSS, JavaScript
- **Vite + React**
- Tailwind CSS (optional)
- Razorpay Payment Integration
- JWT Authentication

###  Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- ClipDrop AI Integration
- Razorpay API
- JWT-based Authentication

---

##  How to Use

### 1. Clone the Repository

 - git clone https://github.com/Gokul-Nishandh/Imagify.git
 - cd Imagify

### 2. Setup Frontend

 - cd frontend
 - Update the .env file :
 - VITE_RAZORPAY_KEY=your_razorpay_test_api_key

 - Installing the dependencies:
 - Go to terminal and type 
 - npm install
 - npm run dev

 - Front end will run in the respective URL
###  3. Setup Backend

 - cd ../backend

 - Update .env file:
 - CLIPDROP_API_KEY=your_clipdrop_api_key
 - RAZORPAY_KEY_ID=your_razorpay_key_id
 - RAZORPAY_KEY_SECRET=your_razorpay_key_secret
 - MONGODB_URI=your_mongodb_connection_string
 - JWT_SECRET=your_jwt_secret

 - Installing the  dependencies:
 - npm install

 - To start the backend server go to terminal and type
 - node server.js
---
###  Notes
 - Razorpay runs in test mode for development.

 - Keep .env files secret and never push them to GitHub.

 - Make sure both frontend and backend servers are running to use the app.
