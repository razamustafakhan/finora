import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  userData: null,

  loginObj: {
    email: "",
    password: "",
  },

  registerObj: {
    userName: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // ==============================
    // LOGIN INPUT CHANGE
    // ==============================
    handleLoginChange: (state, action) => {
      const { name, value } = action.payload;

      state.loginObj[name] = value;
    },

    // ==============================
    // REGISTER INPUT CHANGE
    // ==============================
    handleRegisterChange: (state, action) => {
      const { name, value } = action.payload;

      state.registerObj[name] = value;
    },

    // ==============================
    // LOADING
    // ==============================
    setLoading: (state, action) => {
      state.loading = true;
    },
    setSuccess: (state, action) => {
      state.loading = false;
    },

    // ==============================
    // SET USER
    // ==============================
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    // ==============================
    // LOGOUT
    // ==============================
    logout: (state) => {
      state.userData = null;

      state.loginObj = {
        email: "",
        password: "",
      };
    },

    // ==============================
    // CLEAR LOGIN FORM
    // ==============================
    loginReset: (state) => {
      state.loginObj = {
        email: "",
        password: "",
      };
    },

    // ==============================
    // CLEAR REGISTER FORM
    // ==============================
    registerReset: (state) => {
      state.registerObj = {
        userName: "",
        email: "",
        password: "",
      };
    },
  },
});

export const {
  handleLoginChange,
  handleRegisterChange,
  setLoading,
  setUserData,
  logout,
  loginReset,
  setSuccess,
  registerReset,
} = authSlice.actions;

export default authSlice.reducer;
