import express from 'express';
import {} from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/logout', logout)
router.get('is_logged_in', isLoggedIn)

export default router;