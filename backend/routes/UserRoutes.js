// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile, 
  verifyEmail 
} = require('../controllers/userController');
const { protect } = require('../middlewares/auth');
const { validateRegistration } = require('../middlewares/validation');

// Public routes
router.post('/register', validateRegistration, registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyEmail);

// Protected routes (require authentication)
router.get('/reqform', protect, getUserProfile);
router.put('/reqform', protect, updateUserProfile);

module.exports = router;