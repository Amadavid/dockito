# DOCKITO


Dockito
Dockito is a comprehensive healthcare management platform designed to streamline the process of scheduling doctor appointments and managing healthcare records. The platform consists of three main components: the frontend, the backend, and the admin panel.



## Screenshots

Here is a screenshot of the application:

![App Screenshot](assets/screenshot.png)

## Setup Guide



Tech Stack
Frontend
React: A JavaScript library for building user interfaces.
Vite: A build tool that provides a faster and leaner development experience for modern web projects.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Axios: A promise-based HTTP client for the browser and Node.js.
React Router: A collection of navigational components that compose declaratively with your application.
React Toastify: A library for adding notifications to your app.
Backend
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express: A minimal and flexible Node.js web application framework.
MongoDB: A document-oriented NoSQL database used for high volume data storage.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
JWT: A compact, URL-safe means of representing claims to be transferred between two parties.
Bcrypt: A library to help you hash passwords.
Cloudinary: A cloud-based service that provides an end-to-end image and video management solution.
Stripe: A suite of APIs powering online payment processing and commerce solutions for internet businesses.
Admin Panel
React: A JavaScript library for building user interfaces.
Vite: A build tool that provides a faster and leaner development experience for modern web projects.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Axios: A promise-based HTTP client for the browser and Node.js.
React Router: A collection of navigational components that compose declaratively with your application.
React Toastify: A library for adding notifications to your app.




## PROJECT STRUCTURE
```

dockito/
├── admin/
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── .gitignore
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── package.json
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md

```
### # Dockito

Dockito is a comprehensive healthcare management platform designed to streamline the process of scheduling doctor appointments and managing healthcare records. The platform consists of three main components: the frontend, the backend, and the admin panel.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **React Toastify**: A library for adding notifications to your app.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A document-oriented NoSQL database used for high volume data storage.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt**: A library to help you hash passwords.
- **Cloudinary**: A cloud-based service that provides an end-to-end image and video management solution.
- **Stripe**: A suite of APIs powering online payment processing and commerce solutions for internet businesses.

### Admin Panel
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **React Toastify**: A library for adding notifications to your app.

## Project Structure

```
dockito/
├── admin/
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── .gitignore
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── package.json
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account (for image management)
- Stripe account (for payment processing)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/dockito.git
   cd dockito/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the 

backend

 directory and add the following environment variables:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   ```

4. Start the backend server:
   ```sh
   npm run server
   ```

### Frontend Setup
1. Navigate to the 

frontend

 directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the 

frontend

 directory and add the following environment variable:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the frontend development server:
   ```sh
   npm run dev
   ```

### Admin Panel Setup
1. Navigate to the 

admin

 directory:
   ```sh
   cd ../admin
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the 

admin

 directory and add the following environment variable:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the admin panel development server:
   ```sh
   npm run dev
   ```

### Accessing the Application
- Frontend: Open your browser and navigate to `http://localhost:5173`
- Admin Panel: Open your browser and navigate to `http://localhost:5174`
- Backend: The backend server will be running on `http://localhost:4000`

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please read the CONTRIBUTING.md file for more information.

## Contact
For any inquiries, please contact [anihgrace200@gmail.com](mailto:anihgrace200@gmail.com).