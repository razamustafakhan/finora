import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/store/auth.slice";
import loanReducer from "../modules/loan/store/loan.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loan: loanReducer,
  },
});
