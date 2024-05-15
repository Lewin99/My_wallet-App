import React from "react";
import Sidebar from "./Sidebar_comp/sidebar";
import Header from "./Header_comp/Header";
import Main from "./Dash_main_comp/DashboardMain";
import "./styles/dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboardWrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboardMain">
        <div className="header">
          <Header />
        </div>
        <div className="dashboardBody">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
