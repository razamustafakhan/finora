import express from "express";
import multer from "multer";

import {
  createLoanApplication,
  loanApplicationList,
  createLoanAccount,
  getLoanAccountList,
  getPhoto,
  getProof1,
  getProof2,
} from "../controllers/loan.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
// import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

// ========================================
// MULTER
// ========================================

const upload = multer({
  limits: {
    fileSize: 3 * 1024 * 1024, // 3 MB
  },
});

// ========================================
// USER LOAN APPLICATION
// ========================================

// Create loan application
router.post("/loan-application", authMiddleware, createLoanApplication);

// ========================================
// ADMIN LOAN APPLICATION
// ========================================

// Get all loan applications
router.get(
  "/loan-application-list",
  authMiddleware,
  // adminMiddleware,
  loanApplicationList,
);

// ========================================
// ADMIN CREATE LOAN ACCOUNT
// ========================================

// Create actual loan account after verification/approval
router.post(
  "/admin/create-loan-account",
  authMiddleware,
  // adminMiddleware,
  upload.fields([
    {
      name: "photo",
      maxCount: 1,
    },
    {
      name: "proofDocument1",
      maxCount: 1,
    },
    {
      name: "proofDocument2",
      maxCount: 1,
    },
  ]),
  createLoanAccount,
);
router.get(
  "/loan-account-list",
  authMiddleware,
  // adminMiddleware,
  getLoanAccountList,
);
router.get(
  "/photo/:id",
  // (req, res, next) => {
  //   console.log("Photo route hit");
  //   next();
  // },
  getPhoto,
);
router.get("/proof1/:id", getProof1);
router.get("/proof2/:id", getProof2);

export default router;
