import express from "express";
import { loginUser, registerUser } from "../services/user.service.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", loginUser);

export default router;