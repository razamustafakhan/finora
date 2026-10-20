import { apiGet, apiPost } from "../../../services/api";
const apiURL = import.meta.env.VITE_API_URL;

export const createAccount = (payload) => {
  return apiPost(`${apiURL}/api/auth/sign-up`, payload);
};
export const signIn = (payload) => {
  return apiPost(`${apiURL}/api/auth/sign-in`, payload);
};
export const getUserData = () => {
  return apiGet(`${apiURL}/api/auth/me`);
};
