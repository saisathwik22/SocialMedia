import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 6ac79c57f2d3e774cdb5b23b792ab79bf9ff282c
