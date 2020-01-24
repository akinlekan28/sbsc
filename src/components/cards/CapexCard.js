import React from 'react'
import capex from '../assets/capex.png'
import Dropdown from '../layout/Dropdown'
import ReactMinimalPieChart from "react-minimal-pie-chart";

export default function CapexCard() {
    return (
      <div className="capex-container">
        <div className="card-flex card-border">
          <img src={capex} alt="capex.png" className="capex-icon" />
          <p className="capex-name">Total Annual Capex Budget</p>
          <p className="capex-price">N 50,000,000</p>
          <Dropdown className="capex-dropdown" />
        </div>
        <ReactMinimalPieChart
          animate={true}
          animationDuration={500}
          animationEasing="ease-out"
          cx={50}
          cy={50}
          data={[
            {
              color: "#6915cf",
              title: "One",
              value: 65
            }
          ]}
          label={true}
          labelPosition={0}
          lengthAngle={234}
          lineWidth={12}
          onClick={undefined}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={0}
          radius={50}
          rounded={true}
          startAngle={60}
          viewBoxSize={[100, 100]}
        />
      </div>
    );
}
