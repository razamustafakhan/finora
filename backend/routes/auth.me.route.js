import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();
// import { authMiddleware } from "../middleware/auth.middleware.js";

router.get("/auth/me", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      _id: req.user._id,
      role: req.user.role,
      userName: req.user.userName,
      email: req.user.email,
    },
  });
});

export default router;
