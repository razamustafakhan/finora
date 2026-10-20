const apiURL = import.meta.env.VITE_API_URL;
import { apiGet, apiPost, apiPostFormData } from "../../../services/api";

export const createLoanApplication = async (payload) => {
  //   console.log(payload);
  return apiPost(`${apiURL}/api/loan/loan-application`, payload);
};

export const getLoanApplicationList = async () => {
  return apiGet(`${apiURL}/api/loan/loan-application-list`);
};

export const createLoanAccount = async (formData) => {
  return apiPostFormData(
    `${apiURL}/api/loan/admin/create-loan-account`,
    formData,
  );
};

export const getAllLoanAccountList = async () => {
  return apiGet(`${apiURL}/api/loan/loan-account-list`);
};
