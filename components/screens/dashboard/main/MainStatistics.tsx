import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/Loader';
import StatisticItem from '@/components/ui/statistic-item/StatisticItem';
import { StatisticsService } from '@/services/statistics/statistics.service';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';

const MainStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () =>
		StatisticsService.getMainStatistics(),
	);

	return (
		<div>
			<Heading>Main Statistics</Heading>
			{isLoading ? (
				<Loader count={3} />
			) : data?.length ? (
				<div className="grid grid-cols-4 gap-8">
					{data.map(item => (
						<StatisticItem item={item} key={item.id}></StatisticItem>
					))}
				</div>
			) : (
				<div>Statistic Not Found</div>
			)}
		</div>
	);
};

export default MainStatistics;
