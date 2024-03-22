import React from "react";
import { transactions } from "./data/budgets";
import "./styles/recentTransaction.css";

const Transaction: React.FC = () => {
  return (
    <div className="TransactionWwrapper">
      <h4>Recent Transaction</h4>
      <div className="transaction-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transaction;
