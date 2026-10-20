// const express = require("express");
import express from "express";
import { createAccount, login } from "../controllers/auth.controller.js";
const router = express.Router();
// import { register, login, logout } from "../controllers/auth.controller.js";

//  API ENDPOINTS
router.post("/auth/sign-up", createAccount);
router.post("/auth/sign-in", login);
// router.post("/auth/logout", logout);

// module.exports = router;
export default router;
