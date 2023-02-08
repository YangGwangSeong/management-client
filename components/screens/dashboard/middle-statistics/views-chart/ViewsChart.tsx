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
import { options } from './chart.options';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

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
