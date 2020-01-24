import React from 'react'
import capex from '../assets/capex.png'
import Dropdown from '../layout/Dropdown'
import ReactMinimalPieChart from "react-minimal-pie-chart";
import spent from '../assets/spent.png'
import balance from "../assets/balance.png";

export default function CapexCard() {
    return (
      <div className="capex-container">
        <div className="card-flex card-border">
          <img src={capex} alt="capex.png" className="capex-icon" />
          <p className="capex-name">Total Annual Capex Budget</p>
          <div className="capex-price-wrapper">
            <p className="capex-price">N 50,000,000</p>
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
                value: 36
              },
              {
                color: "#6915cf",
                title: "two",
                value: 64
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
                <img src={spent} alt="spent.png" />
              </div>
              <div className="capex-summary">
                <p>
                  Total <strong>CAPEX</strong> Spent
                </p>
                <p>N 18,000,000</p>
              </div>
            </div>
            <div className="card-flex">
              <div className="capex-logo">
                <img src={balance} alt="spent.png" />
              </div>
              <div className="capex-summary">
                <p>
                  Total <strong>CAPEX</strong> Balance
                </p>
                <p>N 32,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
