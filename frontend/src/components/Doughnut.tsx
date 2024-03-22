import React from "react";
import { finData } from "./data/budgets";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import "./styles/doughnut.css";

const DoughnutChart: React.FC = () => {
  const incomeAmount: number = finData.amountIncome;
  const expensesAmount: number = finData.amountExpense;
  const savingsAmount: number = finData.amountSaved;

  const totalAmount = incomeAmount + expensesAmount + savingsAmount;

  const [doughnutData] = useState({
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        label: "Financial Overview",
        data: [incomeAmount, expensesAmount, savingsAmount],
        backgroundColor: ["#41f1b6", "#ff6384", "#7380ec"],
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="doughnut-chart-container">
      <div className="doughnut-chart">
        <div className="totalAmount">
          <h4>{totalAmount}$</h4>
        </div>
        <Doughnut data={doughnutData} options={options} />
      </div>
      <div className="chartLegends">
        <div className="left">
          <div className="income">
            <div className="incomeDot"></div>
            <span>Income</span>
          </div>
          <div className="expenses">
            <div className="expensesDot"></div>
            <span>Expenses</span>
          </div>
          <div className="savings">
            <div className="savingsDot"></div>
            <span>Savings</span>
          </div>
        </div>

        <div className="right">
          <div className="incomeAmount">
            <span>{incomeAmount}$</span>
          </div>
          <div className="expensesAmount">
            <span>{expensesAmount}$</span>
          </div>
          <div className="savingsAmount">
            <span>{savingsAmount}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
