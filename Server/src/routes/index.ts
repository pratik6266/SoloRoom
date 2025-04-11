import { Router, Request, Response } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();

// Auth Routes
router.post("/auth/login", AuthController.login);

export default router;