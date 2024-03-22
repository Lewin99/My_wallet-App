import React from "react";
import "./styles/dashMain.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Barchart from "./Barchart";
import DoughnutChart from "./Doughnut";
import FinancialGoalsCard from "./FinancialGoalsCard";

const Main: React.FC = () => {
  return (
    <div>
      {/* mywalletSummary */}
      <div className="mywalletSummary">
        <div className="dashboardHeader">
          <h4>Dashboard</h4>
        </div>
        <div className="cardsWrapper">
          <div className="walletMoney">
            {/* My Wallet Card */}

            <div className="card">
              <div className="myWalletIcon">
                <span>
                  <AccountBalanceWalletOutlinedIcon />
                </span>
              </div>
              <div className="MywalletInfo">
                <h5>My Wallet</h5>
                <p>$1000.000</p>
              </div>
              <div className="lastUpdated">
                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>

            {/* Income Card */}
            <div className="card">
              <div className="incomeIcon">
                <span>
                  <TrendingUpOutlinedIcon />
                </span>
              </div>
              <div className="incomeInfo">
                <h5>Income</h5>
                <p>$500.000</p>
              </div>
              <div className="lastUpdated">
                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>

            {/* Expenses Card */}
            <div className="card">
              <div className="expensesIcon">
                <span>
                  <TrendingDownOutlinedIcon />
                </span>
              </div>
              <div className="expensesInfo">
                <h5>Expenses</h5>
                <p>$300.000</p>
              </div>
              <div className="lastUpdated">
                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dataVisuals section*/}
      <div className="dataVisuals">
        <div className="barchartCard ">
          <div className="barChart">
            <h4>Budgets Overview</h4>
            <div>
              <Barchart />
            </div>
          </div>
        </div>
        <div className="doughnutchartCard">
          <div className="doughnutChart">
            <h4>Financial Overview</h4>
            <div>
              <DoughnutChart />
            </div>
          </div>
        </div>
        <div className="financialGoals">
          <FinancialGoalsCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
