import Recat from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = `${Math.round(props.value / props.maxValue)}%`;
  }
  return (
    <div className="chart-bar">
      <div clasName="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
