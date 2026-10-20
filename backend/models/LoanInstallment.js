import mongoose from "mongoose";

const loanInstallmentSchema = new mongoose.Schema(
  {
    // ============================
    // RELATIONSHIPS
    // ============================

    loanAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoanAccount",
      required: true,
      index: true,
    },

    loanApplicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loan",
      required: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // ============================
    // INSTALLMENT DETAILS
    // ============================

    installmentNumber: {
      type: Number,
      required: true,
      min: 1,
    },

    dueDate: {
      type: Date,
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    // ============================
    // PAYMENT
    // ============================

    paidAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    remainingAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paidDate: {
      type: Date,
    },

    paymentMode: {
      type: String,
      enum: ["cash", "bank_transfer", "upi", "cheque", "online"],
    },

    transactionId: {
      type: String,
      trim: true,
    },

    // ============================
    // STATUS
    // ============================

    status: {
      type: String,
      enum: ["pending", "partial", "paid", "overdue", "cancelled"],
      default: "pending",
      index: true,
    },

    // ============================
    // ADMIN INFORMATION
    // ============================

    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    adminRemarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

loanInstallmentSchema.index({
  loanAccountId: 1,
  installmentNumber: 1,
});

loanInstallmentSchema.index({
  loanAccountId: 1,
  dueDate: 1,
});

const LoanInstallment =
  mongoose.models.LoanInstallment ||
  mongoose.model("LoanInstallment", loanInstallmentSchema);

export default LoanInstallment;
