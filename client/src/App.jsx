import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/common/Home";
import About from "./pages/common/About";
import Contact from "./pages/common/Contact";
import Faq from "./pages/common/Faq";
import AdminDashboard from "./pages/admin/Dashboard";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import { ToastContainer } from "react-toastify";
import LoanApplication from "./pages/common/LoanApplication";
import UserDashboard from "./pages/user/Dashboard";
import UserRoute from "./routes/UserRoute";
import LoanApplicationList from "./pages/admin/LoanApplicationList";
import LoanAccount from "./pages/admin/LoanAccount";
import LoanAccountList from "./pages/admin/LoanAccountList";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/loan-application-list"
          element={<LoanApplicationList />}
        />
        <Route
          path="/admin/create-loan-account/:id"
          element={<LoanAccount />}
        />
        <Route path="/admin/loan-account-list/" element={<LoanAccountList />} />
        <Route path="/user" element={<UserRoute />}>
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
