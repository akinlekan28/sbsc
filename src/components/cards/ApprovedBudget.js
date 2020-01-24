import React from "react";
import approved from "../assets/approved.png";

export default function ApprovedBudget() {
  return (
    <div className="pending-container">
      <div className="card-flex card-border">
        <img src={approved} alt="approved.png" className="budget-icon" />
        <p className="budget-name">Aprroved Budget Reassignment Status</p>
      </div>
      <div className="budget-count-wrapper">
        <div className="budget-count">
          <p className="text-center">373</p>
        </div>
      </div>
    </div>
  );
}
