import { Outlet, useLocation } from "react-router-dom";
import DashboardNavs from "./SubComponent/DashboardNavs";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    toast.success(location["state"]["message"]);
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      <DashboardNavs />
      <main className="flex-1 border m-1 rounded-lg mr-2">
        <Outlet />
        <ToastContainer />
      </main>
    </div>
  );
};

export default Dashboard;
