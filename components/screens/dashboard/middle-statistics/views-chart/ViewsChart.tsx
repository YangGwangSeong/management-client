import { ViewsByMonth } from '@/services/statistics/statistics.interface';
import React, { FC } from 'react';
import {
	BarElement,
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './ViewsChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				font: {
					size: 18,
				},
			},
		},
		y: {
			barThickness: 6,
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				display: false,
			},
		},
	},
	borderRadius: 15,
	borderSkipped: false,
	barThickness: 60,
	plugins: {
		tooltip: {
			bodyColor: '#222',
			backgroundColor: '#fff',
			titleColor: '#222',
			titleFont: {
				size: 18,
				weight: 500,
			},
			bodyFont: {
				size: 16,
			},
			titleAlign: 'center',
			padding: 12,
			displayColors: false,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString('ru-Ru');
					}
				},
			},
		},
	},
};

// const labels = [
// 	'Jan',
// 	'Feb',
// 	'Mar',
// 	'Apr',
// 	'May',
// 	'Jun',
// 	'Jul',
// 	'Aug',
// 	'Sep',
// 	'Oct',
// 	'Nov',
// 	'Dec',
// ];

// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: 'Dataset 1',
// 			data: labels.map(() => 1000),
// 			backgroundColor: '#7A94FE',
// 		},
// 	],
// };

const ViewsChart: FC<{ data: ViewsByMonth[] }> = ({ data }) => {
	return (
		<div className={styles.chart}>
			<Bar
				options={options as any}
				data={{
					labels: data.map(item => item.month),
					datasets: [
						{
							label: 'Dataset 1',
							data: data.map(item => item.views),
							backgroundColor: '#7A94FE',
						},
					],
				}}
			/>
		</div>
	);
};

export default ViewsChart;
