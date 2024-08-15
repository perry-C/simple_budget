'use client'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChart from "./barchart";

Chart.register(CategoryScale);

export default function Page() {
  const [chartData, setChartData] = useState([
    {
      name: "Essentials",
      money: 600
    },
    {
      name: "Activities",
      money: 200
    },
    {
      name: "Savings/Investment",
      money: 150
    },
    {
      name: "Debt",
      money: 50
    }
  ]);

  return (
    <div className="mt-[40px]">
      <BarChart data={chartData} />
    </div>
  );
}