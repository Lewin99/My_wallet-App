import React from "react";
import { Bar } from "react-chartjs-2";
import { budgets, Budget } from "./data/budgets";
import { BudgetData } from "./data/budgets";
import { useState } from "react";

const Barchart: React.FC = () => {
  const firstBudget: Budget = budgets[0];
  const budget = firstBudget.categories;

  const [budgetData] = useState<BudgetData>({
    labels: budget.map((data) => data.name),
    datasets: [
      {
        label: "Allocated Amount",
        data: budget.map((data) => data.allocatedAmount),
        backgroundColor: "#7380ec",
        borderWidth: 1,
      },
      {
        label: "Actual Spending",
        data: budget.map((data) => data.actualSpending),
        backgroundColor: "#ff7782",
        borderWidth: 1,
      },
    ],
  });

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
