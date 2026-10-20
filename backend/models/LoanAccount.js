import mongoose from "mongoose";

const loanAccountSchema = new mongoose.Schema(
  {
    // ============================
    // ORIGINAL LOAN APPLICATION
    // ============================

    loanApplicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loan",
      required: true,
      unique: true,
      index: true,
    },

    // ============================
    // USER
    // ============================

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // ============================
    // BORROWER DETAILS
    // ============================

    fatherName: {
      type: String,
      trim: true,
    },

    aadhaarNumber: {
      type: String,
      trim: true,
    },

    // ============================
    // DOCUMENTS
    // ============================

    photo: {
      data: Buffer,
      imageType: String,
      imageName: String,
    },

    proofDocument1: {
      data: Buffer,
      imageType: String,
      imageName: String,
    },

    proofDocument2: {
      data: Buffer,
      imageType: String,
      imageName: String,
    },

    // ============================
    // LOAN FINANCIAL DETAILS
    // ============================

    requestedAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    approvedAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    interestRate: {
      type: Number,
      required: true,
      min: 0,
    },

    interestAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    processingFee: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalPayableAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // ============================
    // INSTALLMENT PLAN
    // ============================

    loanDuration: {
      type: Number,
      required: true,
      min: 1,
    },

    durationUnit: {
      type: String,
      enum: ["months", "years"],
      default: "months",
    },

    installmentCount: {
      type: Number,
      required: true,
      min: 1,
    },

    installmentAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    installmentFrequency: {
      type: String,
      enum: ["weekly", "monthly", "quarterly", "yearly"],
      default: "monthly",
    },

    firstInstallmentDate: {
      type: Date,
      required: true,
    },

    // ============================
    // PAYMENT SUMMARY
    // ============================

    totalPaidAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    outstandingAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // ============================
    // ACCOUNT STATUS
    // ============================

    status: {
      type: String,
      enum: ["pending", "active", "completed", "defaulted", "closed"],
      default: "pending",
      index: true,
    },

    approvedAt: {
      type: Date,
    },

    closedAt: {
      type: Date,
    },

    remarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const LoanAccount =
  mongoose.models.LoanAccount ||
  mongoose.model("LoanAccount", loanAccountSchema);

export default LoanAccount;
