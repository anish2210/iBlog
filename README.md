# iBlog

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-friendly-orange.svg)](https://hacktoberfest.com/)

## Project Overview
This project is a blog posting platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, edit, and manage blog posts with a clean and responsive UI.

## Folder Structure
/backend # Contains the backend server code (Node.js, Express) /frontend # Contains the frontend client code (React.js) 

# Project documentation

## Features
- User authentication and authorization
- CRUD operations for blog posts

## Installation and Setup
Follow these instructions to get the project up and running locally:

### Prerequisites
- Node.js (>= v14)
- MongoDB Compass

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/anish2210/iBlog.git
    cd iBlog
    ```

2. Install dependencies:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up environment variables for backend (like database URI.)

4. Run the project:
    ```bash
    # Run backend
    cd backend
    node index.js

    # Run frontend
    cd frontend
    npm run dev
    ```

5. Visit `http://localhost:3000` in your browser to view the app.

## Contribution Guidelines
We welcome contributions for Hacktoberfest and beyond! Please check out our [Contributing Guidelines](CONTRIBUTING.md) before making a contribution.

