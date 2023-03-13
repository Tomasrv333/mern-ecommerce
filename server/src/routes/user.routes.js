import express from "express";
import { getUserInfo, updateUserInfo } from "../controllers/user.js";

const router = express.Router();

router
    .get('/me', getUserInfo)
    .put('/me', updateUserInfo)

export default router;