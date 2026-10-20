import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import {
  handleLoginChange,
  handleRegisterChange,
  setSuccess,
  setUserData,
  logout,
  registerReset,
  setLoading,
  loginReset,
} from "../../../modules/auth/store/auth.slice";

import { createAccount, signIn } from "../services/auth.service";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  // Redux dispatch function
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Get authentication state from Redux store
  const auth = useAppSelector((state) => state.auth);

  // Extract required values from auth state
  const { loading, userData, loginObj, registerObj } = auth;
  // console.log(userData, "userData>>>>>>>>>>>");

  // Handle login form field changes
  const onLoginChange = (e) => {
    const { name, value } = e.target;

    // Update the login form data in Redux
    dispatch(handleLoginChange({ name, value }));
  };

  // Handle registration form field changes
  const onRegisterChange = (e) => {
    const { name, value } = e.target;

    // Update the registration form data in Redux
    dispatch(handleRegisterChange({ name, value }));
  };

  // Handle registration form submission
  const onRegisterSubmit = async (e) => {
    e.preventDefault();

    // Start loading state
    dispatch(setLoading());

    try {
      // Send registration data to the backend
      const data = await createAccount(registerObj);

      // Handle successful registration
      if (data.success) {
        showSuccessToast(data.message);
        navigate("/sign-in");

        // Update loading/success state
        dispatch(setSuccess());

        // Clear registration form
        dispatch(registerReset());
      }
    } catch (error) {
      // Show backend or network error
      showErrorToast(error.message);

      // Stop loading state
      dispatch(setSuccess());

      // Reset registration form after error
      dispatch(registerReset());
    }
  };
  const onLoginSubmit = async (e) => {
    e.preventDefault();

    // Start loading state
    dispatch(setLoading());

    try {
      // Send registration data to the backend
      const data = await signIn(loginObj);
      // console.log(data);

      // Handle successful registration
      if (data.success) {
        showSuccessToast(data.message);
        dispatch(setUserData(data.user));

        // Update loading/success state
        dispatch(setSuccess());

        // Clear registration form
        dispatch(loginReset());
      }
    } catch (error) {
      // Show backend or network error
      showErrorToast(error.message);

      // Stop loading state
      dispatch(setSuccess());

      // Reset registration form after error
      dispatch(loginReset());
    }
  };

  // Store logged-in user data in Redux
  const setUser = (data) => {
    dispatch(setUserData(data));
  };

  // Logout the current user
  const handleLogout = () => {
    dispatch(logout());
  };

  // Clear login form data
  const clearLoginForm = () => {
    dispatch(clearLogin());
  };

  // Clear registration form data
  const clearRegisterForm = () => {
    dispatch(clearRegister());
  };

  // Expose auth state and handlers to components
  return {
    loading,
    userData,
    loginObj,
    registerObj,

    onLoginChange,
    onRegisterChange,
    onRegisterSubmit,
    onLoginSubmit,

    setUser,
    handleLogout,

    clearLoginForm,
    clearRegisterForm,
  };
};

export default useAuth;
