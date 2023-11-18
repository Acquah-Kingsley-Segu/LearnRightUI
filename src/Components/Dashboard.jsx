import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashboardNavs from "./SubComponent/DashboardNavs";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Dashboard = () => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    //toast.success(location["state"]["message"]);
    console.log(location.pathname);
    setPath(location.pathname.split("/").slice(1));
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      <DashboardNavs />
      <main className="flex-1 border m-1 rounded-lg mr-2">
        <div className="m-2 text-md mt-5 flex">
          {path.map((path_name, index) => (
            <div>
              <NavLink
                className="mx-2 hover:text-violet-700 hover:underline"
                key={index}
                to={`/${path.slice(0, index + 1).join("/")}`}
              >
                {path_name}
              </NavLink>
              &gt;
            </div>
          ))}
        </div>
        <Outlet />
        <ToastContainer />
      </main>
    </div>
  );
};

export default Dashboard;
