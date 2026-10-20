import { FiFileText, FiGrid } from "react-icons/fi";
import Sidebar from "../components/admin/Sidebar";
import PublicLayout from "./PublicLayout";

const userNavigation = [
  {
    to: "/user/dashboard",
    label: "Overview",
    icon: FiGrid,
  },
  {
    to: "/user/loan-applications",
    label: "My Applications",
    icon: FiFileText,
  },
];

const UserLayout = ({ children }) => {
  return (
    <PublicLayout>
      <div className="flex min-h-screen bg-slate-50">
        {/* SIDEBAR */}
        <Sidebar menu={userNavigation} />

        {/* MAIN CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* CONTENT */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </PublicLayout>
  );
};

export default UserLayout;
