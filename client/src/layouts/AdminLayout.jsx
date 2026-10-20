import Sidebar from "../components/admin/Sidebar";
import TopBar from "../components/admin/Topbar";
import {
  FiGrid,
  FiFileText,
  FiCreditCard,
  FiUsers,
  FiDollarSign,
  FiRefreshCw,
  FiAlertCircle,
  FiPackage,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
const primaryMenu = [
  {
    to: "/admin/dashboard",
    label: "Overview",
    icon: FiGrid,
  },
  {
    to: "/admin/loan-application-list",
    label: "Applications",
    icon: FiFileText,
  },
  {
    to: "/admin/loan-account-list",
    label: "Active Loans",
    icon: FiCreditCard,
  },
  {
    to: "/admin/customers",
    label: "Borrowers",
    icon: FiUsers,
  },
  {
    to: "/admin/payments",
    label: "Payments",
    icon: FiDollarSign,
  },
  {
    to: "/admin/installments",
    label: "Repayments",
    icon: FiRefreshCw,
  },
  {
    to: "/admin/overdue-loans",
    label: "Collections",
    icon: FiAlertCircle,
  },
  {
    to: "/admin/loan-products",
    label: "Loan Products",
    icon: FiPackage,
  },
  {
    to: "/admin/reports",
    label: "Analytics",
    icon: FiBarChart2,
  },
];

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* LEFT SIDEBAR */}
      <Sidebar menu={primaryMenu} />

      {/* RIGHT SECTION */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* TOPBAR */}
        <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
          <TopBar />
        </div>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
