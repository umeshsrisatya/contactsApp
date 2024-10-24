# Project Name

**Description:**  
The **Contacts App** is a MERN stack application for managing personal or business contacts. It allows users to add, edit, delete, and search through their contact lists, with all data securely stored in MongoDB. The app features a user-friendly interface built with React, and Node.js with Express.js handles the backend API. User authentication ensures data privacy, and the app is fully responsive for use on any device.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed and running locally or use a cloud MongoDB instance (e.g., MongoDB Atlas)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```
3. Install server-side dependencies:
    ```bash
    cd backend
    npm install
    ```
4. Install client-side dependencies:
    ```bash
    cd ../frontend
    npm install
    ```
5. Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```
6. Run the development server:
    - In the `backend` folder, start the backend:
        ```bash
        npm run dev
        ```
    - In the `frontend` folder, start the React app:
        ```bash
        npm start
        ```

## Usage

Once both servers are running, open your browser and visit:
http://localhost:3000
