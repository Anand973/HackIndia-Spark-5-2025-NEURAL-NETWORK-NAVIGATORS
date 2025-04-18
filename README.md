# Crisis Connect

Crisis Connect is a modern web application designed to help communities respond to and manage crisis situations effectively. The platform provides real-time crisis mapping, impact metrics, and alert systems to coordinate emergency responses.

## 🚀 Features

- **Real-time Crisis Mapping**: Interactive map interface showing crisis locations and affected areas
- **Impact Metrics**: Visual representation of crisis impact and response statistics
- **Alert System**: Real-time notifications and alerts for crisis situations
- **Responsive UI**: Modern and intuitive user interface built with React and TypeScript
- **Secure Backend**: RESTful API with authentication and data protection

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Modern UI Components
- Interactive Maps
- Real-time Updates

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- RESTful API

## 📁 Project Structure

```
crisis-connect/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── app.js          # Express application setup
│   └── server.js       # Server entry point
│
└── components/
    ├── ui/             # UI components
    ├── crisis-map.tsx  # Crisis mapping component
    ├── impact-metrics.tsx # Impact visualization
    ├── alert-banner.tsx   # Alert system
    └── navigation.tsx     # Navigation component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## 🔒 Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## 📝 API Documentation

The backend provides RESTful APIs for:
- User authentication
- Crisis data management
- Alert system
- Impact metrics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.



## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for their invaluable tools and libraries
