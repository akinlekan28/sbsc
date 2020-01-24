import React from "react";
import Dropdown from "../layout/Dropdown";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import opexspent from "../assets/opexspent.png";
import approved from "../assets/approved.png";
import opexbalance from "../assets/opexbalance.png";

export default function OpexCard() {
  return (
    <div className="capex-container">
      <div className="card-flex card-border">
        <img src={approved} alt="capex.png" className="capex-icon" />
        <p className="capex-name">Total Annual OPEX Budget</p>
        <div className="capex-price-wrapper">
          <p className="opex-price">N 20,000,000</p>
        </div>
        <Dropdown className="capex-dropdown" />
      </div>
      <div className="card-flex chart-border">
        <ReactMinimalPieChart
          animate={true}
          animationDuration={500}
          animationEasing="ease-out"
          cx={50}
          cy={50}
          data={[
            {
              color: "#e5e5e5",
              title: "One",
              value: 50
            },
            {
              color: "#fb0091",
              title: "two",
              value: 50
            }
          ]}
          label={true}
          labelPosition={0}
          lengthAngle={360}
          lineWidth={15}
          onClick={undefined}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={0}
          radius={50}
          rounded={true}
          startAngle={60}
          viewBoxSize={[100, 100]}
          className="chart-pie"
        />
        <div className="chart-breakdown">
          <div className="card-flex">
            <div className="capex-logo">
              <img src={opexspent} alt="spent.png" />
            </div>
            <div className="capex-summary">
              <p>
                Total <strong>OPEX</strong> Budget Spent
              </p>
              <p>N 10,000,000</p>
            </div>
          </div>
          <div className="card-flex">
            <div className="capex-logo">
              <img src={opexbalance} alt="spent.png" />
            </div>
            <div className="capex-summary">
              <p>
                Total <strong>OPEX</strong> Balance
              </p>
              <p>N 10,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
