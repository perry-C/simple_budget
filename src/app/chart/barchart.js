
import { useEffect, useRef } from "react";
import {
	Chart,
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Title,
	Tooltip,
	Legend,
	Filler,
	TimeScale,
	TimeSeriesScale,
} from "chart.js";

Chart.register(
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Title,
	Tooltip,
	Legend,
	Filler,
	TimeScale,
	TimeSeriesScale
);

const BarChart = ({ data }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const labels = data.map((item => item.name))

		const heights = data.map((item) => item.money);



		const chartData = {
			labels: labels,
			datasets: [
				{
					data: heights,
					fill: "start", // Enable fill
					borderColor: "rgba(3, 177, 254)",
					backgroundColor: "rgba(3, 177, 254)",
				},
			],
		};

		const config = {
			type: "bar",
			data: chartData,
			options: {
				plugins: {
					legend: {
						display: false,
					},
				},
			},
		};

		const myChart = new Chart(ctx, config);

		return () => {
			myChart.destroy();
		};
	}, [data]);

	return (
		<div className="w-[100%] h-[250px] flex items-center justify-center ">
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default BarChart;
