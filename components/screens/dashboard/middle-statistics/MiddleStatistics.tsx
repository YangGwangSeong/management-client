import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/Loader';
import TotalFees from '@/components/screens/dashboard/middle-statistics/total-fees/TotalFees';
import { StatisticsService } from '@/services/statistics/statistics.service';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import ViewsChart from './ViewsChart';
import styles from './MiddleStatistics.module.scss';

const MiddleStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get middle statistics'], () =>
		StatisticsService.getMiddleStatistics(),
	);

	return (
		<div className="mt-10">
			<Heading>Middle Statistics</Heading>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div className={styles.wrapper}>
					<TotalFees total={data.totalFees} />
					<ViewsChart data={data.viewsByMonth} />
				</div>
			) : (
				<div>Statistic Not Found</div>
			)}
		</div>
	);
};

export default MiddleStatistics;
