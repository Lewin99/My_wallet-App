import React from "react";
import { Bar } from "react-chartjs-2";
import { budgets, Budget, BudgetData } from "./data/budgets"; 
import { useState } from "react";

const Barchart: React.FC = () => {
  const firstBudget: Budget = budgets[0];
  const budgetData = useState<BudgetData>({
    labels: firstBudget.categories.map((data) => data.name),
    datasets: [
      {
        label: "Allocated Amount",
        data: firstBudget.categories.map((data) => data.allocatedAmount),
        backgroundColor: "#7380ec",
        borderWidth: 1,
      },
      {
        label: "Actual Spending",
        data: firstBudget.categories.map((data) => data.actualSpending),
        backgroundColor: "#ff7782",
        borderWidth: 1,
      },
    ],
  })[0]; // Use the state directly

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return <Bar data={budgetData} options={options} />;
};

export default Barchart;
