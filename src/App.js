import React from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import PendingBudget from "./components/cards/PendingBudget";
import ApprovedBudget from "./components/cards/ApprovedBudget";
import DeclinedBudget from "./components/cards/DeclinedBudget";
import CapexCard from "./components/cards/CapexCard";
import OpexCard from "./components/cards/OpexCard";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Header />
      <div className="container">
        <div className="content-flex">
          <div className="header-1">
            <p>Dashboard</p>
          </div>
          <div className="header-2">
            <p>20 Dec 2019, Friday</p>
          </div>
        </div>
        <div className="card-flex">
          <div className="card-flex-item-1">
            <div className="card-flex equal">
              <div className="capex">
                <CapexCard />
              </div>
              <div className="opex">
                <OpexCard />
              </div>
            </div>
          </div>
          <div className="card-flex-item-2 equal">
            <PendingBudget />
            <ApprovedBudget />
            <DeclinedBudget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
