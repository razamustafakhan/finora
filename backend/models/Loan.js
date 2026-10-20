import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    // ========================================
    // APPLICATION NUMBER
    // ========================================
    applicationNumber: {
      type: String,
      unique: true,
      index: true,
    },

    // ========================================
    // CUSTOMER
    // ========================================
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // ========================================
    // CUSTOMER INFORMATION
    // ========================================
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    fatherName: {
      type: String,
      trim: true,
    },

    // ========================================
    // EMPLOYMENT / INCOME
    // ========================================
    employment: {
      type: String,
      enum: [
        "salaried",
        "self_employed",
        "business",
        "student",
        "retired",
        "other",
      ],
      required: true,
    },

    income: {
      type: Number,
      required: true,
      min: 0,
    },

    // ========================================
    // LOAN REQUEST
    // ========================================
    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    time: {
      type: Number,
      required: true,
      min: 1,
    },

    timeUnit: {
      type: String,
      enum: ["months", "years"],
      default: "months",
    },

    purpose: {
      type: String,
      required: true,
      trim: true,
    },

    // ========================================
    // ADDRESS
    // ========================================
    address: {
      addressLine: {
        type: String,
        trim: true,
      },

      city: {
        type: String,
        trim: true,
      },

      state: {
        type: String,
        trim: true,
      },

      pincode: {
        type: String,
        trim: true,
      },
    },

    // ========================================
    // APPLICATION STATUS
    // ========================================
    status: {
      type: String,
      enum: ["submitted", "under_review", "approved", "rejected", "cancelled"],
      default: "submitted",
      index: true,
    },

    // ========================================
    // VERIFICATION
    // ========================================
    verificationStatus: {
      type: String,
      enum: ["pending", "in_progress", "verified"],
      default: "pending",
    },

    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    verifiedAt: {
      type: Date,
    },

    verificationRemarks: {
      type: String,
      trim: true,
    },

    // ========================================
    // APPROVAL
    // ========================================
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    approvedAt: {
      type: Date,
    },

    // ========================================
    // REJECTION
    // ========================================
    rejectedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    rejectedAt: {
      type: Date,
    },

    rejectionReason: {
      type: String,
      trim: true,
    },

    // ========================================
    // ADMIN REMARKS
    // ========================================
    remarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
