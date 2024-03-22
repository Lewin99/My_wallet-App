import React from "react";
import "./styles/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-Wrapper">
      <div className="sidebar-logo">
        <img
          src="https://i.ibb.co/v30tzD8/pngaaa-com-4457319.png"
          alt="pngaaa-com-4457319"
        />
        <h4>Budyyget</h4>
      </div>
      <div className="sidebar-links">
        <div className="dashboard">
          <div className="dashbord-icon">
            <DashboardIcon />
          </div>
          <div className="dashboard-heading">
            <span className="heading">Dashboard</span>
          </div>
        </div>
        <div className="Budget">
          <div className="Budget-icon">
            <MonetizationOnOutlinedIcon />
          </div>
          <div className="Budget-heading">
            <span className="heading">Budget</span>
          </div>
        </div>
        <div className="Transaction">
          <div className="Transaction-icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="Transaction-heading">
            <span className="heading">Transactions</span>
          </div>
        </div>
        <div className="FinancialGoals">
          <div className="FinancialGoals-icon">
            <TimelineOutlinedIcon />
          </div>
          <div className="FinancialGoals-heading">
            <span className="heading">Financial goals</span>
          </div>
        </div>

        <div className="Reports">
          <div className="Reports-icon">
            <AssessmentIcon />
          </div>
          <div className="Reports-heading">
            <span className="heading">Reports</span>
          </div>
        </div>
        <div className="Analytics">
          <div className="Analytics-icon">
            <BarChartIcon />
          </div>
          <div className="Analytics-heading">
            <span className="heading">Analytics</span>
          </div>
        </div>
        <div className="Settings">
          <div className="Settings">
            <SettingsIcon />
          </div>
          <div className="Settings-heading">
            <span className="heading">Settings</span>
          </div>
        </div>
        <div className="Logout">
          <div className="Logout-icon">
            <LogoutIcon />
          </div>
          <div className="Logout-heading">
            <span className="heading">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
