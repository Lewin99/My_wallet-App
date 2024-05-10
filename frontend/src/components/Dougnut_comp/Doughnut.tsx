import React from "react";
import { finData } from "../data/budgets";
import { Doughnut } from "react-chartjs-2";
import {
  StyledDoughnutChart,
  DoughnutContainer,
  LeftLegend,
  RightLegend,
  LegendItem,
  Dot,
  Amount,
} from "./DougnutStyles";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutChart: React.FC = () => {
  const incomeAmount: number = finData.amountIncome;
  const expensesAmount: number = finData.amountExpense;
  const savingsAmount: number = finData.amountSaved;

  const doughnutData = {
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        label: "Financial Overview",
        data: [incomeAmount, expensesAmount, savingsAmount],
        backgroundColor: ["#41f1b6", "#ff7782", "#7380ec"],
      },
    ],
  };

  return (
    <StyledDoughnutChart>
      <DoughnutContainer>
        <Doughnut data={doughnutData} options={options} />
      </DoughnutContainer>

      <LeftLegend>
        <LegendItem>
          <Dot bgColor="#41f1b6" />
          <span>Income</span>
        </LegendItem>
        <LegendItem>
          <Dot bgColor="#ff7782" />
          <span>Expenses</span>
        </LegendItem>
        <LegendItem>
          <Dot bgColor="#7380ec" />
          <span>Savings</span>
        </LegendItem>
      </LeftLegend>

      <RightLegend>
        <Amount>{incomeAmount}$</Amount>
        <Amount>{expensesAmount}$</Amount>
        <Amount>{savingsAmount}$</Amount>
      </RightLegend>
    </StyledDoughnutChart>
  );
};

export default DoughnutChart;
