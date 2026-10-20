import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  // ========================================
  // ADMIN
  // ========================================

  loanApplicationList: [],
  loanAccountList: [],

  // ========================================
  // CUSTOMER
  // ========================================

  userLoanApplications: [],

  // ========================================
  // LOAN ACCOUNT
  // ========================================

  loanAccount: {
    // Borrower verification
    fatherName: "",
    aadhaarNumber: "",

    // Documents
    photo: null,
    proofDocument1: null,
    proofDocument2: null,

    // Loan terms
    approvedAmount: "",
    interestRate: "",
    processingFee: "",

    loanDuration: "",
    durationUnit: "months",

    // Repayment
    installmentFrequency: "monthly",
    firstInstallmentDate: "",

    // Admin remarks
    remarks: "",
  },

  // ========================================
  // SELECTED LOAN APPLICATION
  // ========================================

  selectedLoan: null,

  // ========================================
  // LOAN APPLICATION FORM
  // ========================================

  loanObj: {
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    employment: "",
    income: "",
    amount: "",
    time: "",
    timeUnit: "months",
    purpose: "",

    address: {
      addressLine: "",
      city: "",
      state: "",
      pincode: "",
    },
  },
};

const loanSlice = createSlice({
  name: "loan",

  initialState,

  reducers: {
    // ========================================
    // LOAN APPLICATION CHANGE
    // ========================================

    handleLoanChange: (state, action) => {
      const { name, value } = action.payload;

      if (
        name === "addressLine" ||
        name === "city" ||
        name === "state" ||
        name === "pincode"
      ) {
        state.loanObj.address[name] = value;
        return;
      }

      state.loanObj[name] = value;
    },

    // ========================================
    // LOAN ACCOUNT CHANGE
    // ========================================

    handleLoanAccountChange: (state, action) => {
      const { name, value } = action.payload;

      state.loanAccount[name] = value;
    },

    // ========================================
    // FILE CHANGE
    // ========================================

    handleLoanAccountFileChange: (state, action) => {
      const { name, file } = action.payload;

      state.loanAccount[name] = file;
    },

    // ========================================
    // ADMIN LOAN APPLICATION LIST
    // ========================================

    setLoanApplicationList: (state, action) => {
      state.loanApplicationList = action.payload;
    },
    setLoanAccountList: (state, action) => {
      state.loanAccountList = action.payload;
    },

    // ========================================
    // SELECTED LOAN
    // ========================================

    setSelectedLoan: (state, action) => {
      state.selectedLoan = action.payload;
    },

    clearSelectedLoan: (state) => {
      state.selectedLoan = null;
    },

    // ========================================
    // LOADING
    // ========================================

    setLoading: (state) => {
      state.loading = true;
    },

    setSuccess: (state) => {
      state.loading = false;
    },

    // ========================================
    // RESET LOAN APPLICATION
    // ========================================

    resetLoanObj: (state) => {
      state.loanObj = {
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        employment: "",
        income: "",
        amount: "",
        time: "",
        timeUnit: "months",
        purpose: "",

        address: {
          addressLine: "",
          city: "",
          state: "",
          pincode: "",
        },
      };
    },

    // ========================================
    // RESET LOAN ACCOUNT
    // ========================================

    resetLoanAccount: (state) => {
      state.loanAccount = {
        fatherName: "",
        aadhaarNumber: "",

        photo: null,
        proofDocument1: null,
        proofDocument2: null,

        approvedAmount: "",
        interestRate: "",
        processingFee: "",

        loanDuration: "",
        durationUnit: "months",

        installmentFrequency: "monthly",
        firstInstallmentDate: "",

        remarks: "",
      };
    },
  },
});

export const {
  handleLoanChange,
  handleLoanAccountChange,
  handleLoanAccountFileChange,

  setLoanApplicationList,
  setSelectedLoan,

  setLoading,
  setSuccess,

  resetLoanObj,
  resetLoanAccount,
  setLoanAccountList,

  clearSelectedLoan,
} = loanSlice.actions;

export default loanSlice.reducer;
