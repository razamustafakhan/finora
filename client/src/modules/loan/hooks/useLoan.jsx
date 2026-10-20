import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";

import {
  createLoanApplication,
  getLoanApplicationList,
  createLoanAccount,
  getAllLoanAccountList,
} from "../service/loan.service";

import {
  handleLoanChange,
  handleLoanAccountChange,
  handleLoanAccountFileChange,
  setLoading,
  setLoanApplicationList,
  setSuccess,
  resetLoanObj,
  resetLoanAccount,
  setLoanAccountList,
} from "../store/loan.slice";

const useLoan = () => {
  const dispatch = useAppDispatch();

  const {
    loanObj,
    loanAccount,
    loading,
    loanApplicationList,
    selectedLoan,
    loanAccountList,
  } = useAppSelector((state) => state.loan);

  // ========================================
  // LOAN APPLICATION INPUT CHANGE
  // ========================================

  const onLoanChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      handleLoanChange({
        name,
        value,
      }),
    );
  };

  // ========================================
  // LOAN ACCOUNT INPUT CHANGE
  // ========================================

  const onLoanAccountChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      handleLoanAccountChange({
        name,
        value,
      }),
    );
  };

  // ========================================
  // LOAN ACCOUNT FILE CHANGE
  // ========================================

  const onLoanAccountFileChange = (e) => {
    const { name, files } = e.target;

    dispatch(
      handleLoanAccountFileChange({
        name,
        file: files?.[0] || null,
      }),
    );
  };

  // ========================================
  // SUBMIT LOAN APPLICATION
  // ========================================

  const onLoanApplicationSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    try {
      const data = await createLoanApplication(loanObj);

      if (data.success) {
        showSuccessToast(data.message);

        dispatch(setSuccess());
        dispatch(resetLoanObj());

        return;
      }

      dispatch(setSuccess());
    } catch (error) {
      dispatch(setSuccess());

      showErrorToast(error?.message || "Failed to submit loan application");
    }
  };

  // ========================================
  // GET LOAN APPLICATION LIST
  // ========================================

  const onLoanApplicationList = async () => {
    dispatch(setLoading(true));

    try {
      const data = await getLoanApplicationList();

      if (data.success) {
        dispatch(setLoanApplicationList(data.data));
      }

      dispatch(setSuccess());
    } catch (error) {
      dispatch(setSuccess());

      showErrorToast(error?.message || "Failed to fetch loan applications");
    }
  };

  // ========================================
  // CREATE LOAN ACCOUNT
  // ========================================

  const onCreateLoanAccount = async (loanApplicationId, userId) => {
    dispatch(setLoading(true));

    try {
      const formData = new FormData();

      // ========================================
      // APPLICATION
      // ========================================

      formData.append("loanApplicationId", loanApplicationId);

      formData.append("userId", userId);

      // ========================================
      // BORROWER DETAILS
      // ========================================

      formData.append("fatherName", loanAccount.fatherName);

      formData.append("aadhaarNumber", loanAccount.aadhaarNumber);

      // ========================================
      // LOAN TERMS
      // ========================================

      formData.append("approvedAmount", loanAccount.approvedAmount);

      formData.append("interestRate", loanAccount.interestRate);

      formData.append("processingFee", loanAccount.processingFee || 0);

      formData.append("loanDuration", loanAccount.loanDuration);

      formData.append("durationUnit", loanAccount.durationUnit);

      formData.append("installmentFrequency", loanAccount.installmentFrequency);

      formData.append("firstInstallmentDate", loanAccount.firstInstallmentDate);

      // ========================================
      // REMARKS
      // ========================================

      formData.append("remarks", loanAccount.remarks);

      // ========================================
      // DOCUMENTS
      // ========================================

      if (loanAccount.photo) {
        formData.append("photo", loanAccount.photo);
      }

      if (loanAccount.proofDocument1) {
        formData.append("proofDocument1", loanAccount.proofDocument1);
      }

      if (loanAccount.proofDocument2) {
        formData.append("proofDocument2", loanAccount.proofDocument2);
      }

      const data = await createLoanAccount(formData);

      if (data.success) {
        showSuccessToast(data.message);

        dispatch(resetLoanAccount());
      }

      dispatch(setSuccess());

      return data;
    } catch (error) {
      dispatch(setSuccess());

      showErrorToast(error?.message || "Failed to create loan account");

      throw error;
    }
  };

  const onLoanAccountList = async () => {
    dispatch(setLoading());
    try {
      const data = await getAllLoanAccountList();
      if (data.success) {
        dispatch(setLoanAccountList(data.data));
      }
    } catch (error) {
      showErrorToast(error?.message || "Failed to get loan account list");
    } finally {
      dispatch(setSuccess());
    }
  };

  // ========================================
  // RETURN
  // ========================================

  return {
    // Loan application
    loanObj,
    onLoanChange,
    onLoanApplicationSubmit,

    // Loan applications
    loanApplicationList,
    onLoanApplicationList,

    // Loan account
    loanAccount,
    onLoanAccountChange,
    onLoanAccountFileChange,
    onCreateLoanAccount,

    // Selected loan
    selectedLoan,

    // Common
    loading,
    onLoanAccountList,
    loanAccountList,
  };
};

export default useLoan;
