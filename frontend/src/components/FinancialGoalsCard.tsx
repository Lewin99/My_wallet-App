import React from "react";
import "./styles/finDash.css";
import { goals } from "./data/budgets";

const FinancialGoalsCard: React.FC = () => {
  return (
    <div className="goalsWrapper">
      <h6>Savings</h6>
      {goals.map((goal) => (
        <div key={goal._id} className="goalCard">
          <div className="goalTitle">
            <h6>{goal.goal_name}</h6>
            <small>Target: {goal.target_amount}$</small>
          </div>
          <div className="progressBar">
            <small>Saving: {goal.current_balance}$</small>
            <div className="pogressbarParent">
              <div
                className="pogressbarChild"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinancialGoalsCard;
